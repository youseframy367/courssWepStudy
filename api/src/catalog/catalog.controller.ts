import { Controller, Get, Param, Query } from "@nestjs/common";
import { CatalogService } from "./catalog.service";

@Controller("study-domains")
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  getDomains() {
    return this.catalogService.getDomains();
  }

  @Get(":slug")
  getDomain(@Param("slug") slug: string) {
    return this.catalogService.getDomain(slug);
  }

  @Get(":slug/challenges")
  getChallenges(@Param("slug") slug: string, @Query("difficulty") difficulty?: string) {
    return this.catalogService.getChallenges(slug, difficulty);
  }
}
