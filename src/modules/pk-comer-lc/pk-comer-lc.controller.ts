import { Controller, HttpStatus } from '@nestjs/common';
import { PkComerLcService } from './pk-comer-lc.service';
import { MessagePattern } from '@nestjs/microservices';
import { PObtDatlcDto } from './dto/pObtDatlc.dto';
import { SpGenLcDto } from './dto/spGenLc.dto';
import { SpRegistraLcDto } from './dto/spRegistraLc.dto';
import { SpGenRgDto } from './dto/spGenRg.dto';
import { SpRegistraRgsDto } from './dto/spRegistraRgs.dto';
import { PGenAvisoVenLcsDto } from './dto/pGenAvisoVenLcs.dto';

@Controller('pk-comer-lc')
export class PkComerLcController {
    constructor(private readonly service: PkComerLcService) { }
     //---------------------------------------------------------------------------------------------
     @MessagePattern({ cmd: 'pObtDatlc' })
     async pObtDatlc(dataBody: PObtDatlcDto) {
         const { status, error, data } = await this.service.pObtDatlc(dataBody);
         switch (status) {
            case 'false':
                return { statusCode: HttpStatus.OK, message: [status], data }
             case 'ok':
                 return { statusCode: HttpStatus.OK, message: [status], data }
             default:
                 return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: `Error al asignar: ${error ? error : ''}` }
         }
     }
     //---------------------------------------------------------------------------------------------
     @MessagePattern({ cmd: 'spGenLc' })
     async spGenLc(dataBody: SpGenLcDto) {
         const { status, error, data } = await this.service.spGenLc(dataBody);
         switch (status) {
            case 'false':
                return { statusCode: HttpStatus.OK, message: [status], data }
             case 'ok':
                 return { statusCode: HttpStatus.OK, message: [status], data }
             default:
                 return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: `Error al asignar: ${error ? error : ''}` }
         }
     }
     //---------------------------------------------------------------------------------------------
     @MessagePattern({ cmd: 'spRegistraLc' })
     async spRegistraLc(dataBody: SpRegistraLcDto) {
         const { status, error, data } = await this.service.spRegistraLc(dataBody);
         switch (status) {
            case 'false':
                return { statusCode: HttpStatus.OK, message: [status], data }
             case 'ok':
                 return { statusCode: HttpStatus.OK, message: [status], data }
             default:
                 return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: `Error al asignar: ${error ? error : ''}` }
         }
     }
     //---------------------------------------------------------------------------------------------
     @MessagePattern({ cmd: 'spGenRg' })
     async spGenRg(dataBody: SpGenRgDto) {
         const { status, error, data } = await this.service.spGenRg(dataBody);
         switch (status) {
            case 'false':
                return { statusCode: HttpStatus.OK, message: [status], data }
             case 'ok':
                 return { statusCode: HttpStatus.OK, message: [status], data }
             default:
                 return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: `Error al asignar: ${error ? error : ''}` }
         }
     }
     //---------------------------------------------------------------------------------------------
     @MessagePattern({ cmd: 'spRegistraRgs' })
     async spRegistraRgs(dataBody: SpRegistraRgsDto) {
         const { status, error, data } = await this.service.spRegistraRgs(dataBody);
         switch (status) {
            case 'false':
                return { statusCode: HttpStatus.OK, message: [status], data }
             case 'ok':
                 return { statusCode: HttpStatus.OK, message: [status], data }
             default:
                 return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: `Error al asignar: ${error ? error : ''}` }
         }
     }
     //---------------------------------------------------------------------------------------------
     @MessagePattern({ cmd: 'pComerGenCorreosLcs' })
     async pComerGenCorreosLcs(dataBody) {
         const { status, error, data } = await this.service.pComerGenCorreosLcs();
         switch (status) {
            case 'false':
                return { statusCode: HttpStatus.OK, message: [status], data }
             case 'ok':
                 return { statusCode: HttpStatus.OK, message: [status], data }
             default:
                 return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: `Error al asignar: ${error ? error : ''}` }
         }
     }
     //---------------------------------------------------------------------------------------------
     @MessagePattern({ cmd: 'pComerGenCorreosLcsHtml' })
     async pComerGenCorreosLcsHtml(dataBody) {
         const { status, error, data } = await this.service.pComerGenCorreosLcsHtml();
         switch (status) {
            case 'false':
                return { statusCode: HttpStatus.OK, message: [status], data }
             case 'ok':
                 return { statusCode: HttpStatus.OK, message: [status], data }
             default:
                 return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: `Error al asignar: ${error ? error : ''}` }
         }
     }
     //---------------------------------------------------------------------------------------------
     @MessagePattern({ cmd: 'pGenAvisoVenLcs' })
     async pGenAvisoVenLcs(dataBody: PGenAvisoVenLcsDto) {
         const { status, error, data } = await this.service.pGenAvisoVenLcs(dataBody);
         switch (status) {
            case 'false':
                return { statusCode: HttpStatus.OK, message: [status], data }
             case 'ok':
                 return { statusCode: HttpStatus.OK, message: [status], data }
             default:
                 return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: `Error al asignar: ${error ? error : ''}` }
         }
     }
     //---------------------------------------------------------------------------------------------
     
}
