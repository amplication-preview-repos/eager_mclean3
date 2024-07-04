/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { QuestionService } from "../question.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestionCreateInput } from "./QuestionCreateInput";
import { Question } from "./Question";
import { QuestionFindManyArgs } from "./QuestionFindManyArgs";
import { QuestionWhereUniqueInput } from "./QuestionWhereUniqueInput";
import { QuestionUpdateInput } from "./QuestionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestionControllerBase {
  constructor(
    protected readonly service: QuestionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Question })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createQuestion(
    @common.Body() data: QuestionCreateInput
  ): Promise<Question> {
    return await this.service.createQuestion({
      data: data,
      select: {
        correctAnswer: true,
        createdAt: true,
        id: true,
        options: true,
        text: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Question] })
  @ApiNestedQuery(QuestionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questions(@common.Req() request: Request): Promise<Question[]> {
    const args = plainToClass(QuestionFindManyArgs, request.query);
    return this.service.questions({
      ...args,
      select: {
        correctAnswer: true,
        createdAt: true,
        id: true,
        options: true,
        text: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async question(
    @common.Param() params: QuestionWhereUniqueInput
  ): Promise<Question | null> {
    const result = await this.service.question({
      where: params,
      select: {
        correctAnswer: true,
        createdAt: true,
        id: true,
        options: true,
        text: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateQuestion(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() data: QuestionUpdateInput
  ): Promise<Question | null> {
    try {
      return await this.service.updateQuestion({
        where: params,
        data: data,
        select: {
          correctAnswer: true,
          createdAt: true,
          id: true,
          options: true,
          text: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestion(
    @common.Param() params: QuestionWhereUniqueInput
  ): Promise<Question | null> {
    try {
      return await this.service.deleteQuestion({
        where: params,
        select: {
          correctAnswer: true,
          createdAt: true,
          id: true,
          options: true,
          text: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
