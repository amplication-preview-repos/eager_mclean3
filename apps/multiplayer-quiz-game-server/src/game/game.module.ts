import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameModuleBase } from "./base/game.module.base";
import { GameService } from "./game.service";
import { GameController } from "./game.controller";
import { GameResolver } from "./game.resolver";

@Module({
  imports: [GameModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameController],
  providers: [GameService, GameResolver],
  exports: [GameService],
})
export class GameModule {}
