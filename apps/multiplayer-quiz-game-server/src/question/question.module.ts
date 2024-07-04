import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestionModuleBase } from "./base/question.module.base";
import { QuestionService } from "./question.service";
import { QuestionController } from "./question.controller";
import { QuestionResolver } from "./question.resolver";

@Module({
  imports: [QuestionModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestionController],
  providers: [QuestionService, QuestionResolver],
  exports: [QuestionService],
})
export class QuestionModule {}
