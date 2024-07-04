import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerService } from "./player.service";
import { PlayerControllerBase } from "./base/player.controller.base";

@swagger.ApiTags("players")
@common.Controller("players")
export class PlayerController extends PlayerControllerBase {
  constructor(
    protected readonly service: PlayerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
