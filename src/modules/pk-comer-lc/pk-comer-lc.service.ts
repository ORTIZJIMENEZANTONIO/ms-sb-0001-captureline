import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PObtDatlcDto } from './dto/pObtDatlc.dto';
import { ComerParametrosmodEntity } from './entitis/ComerParametrosmod.entity';
import { PGenAvisoVenLcsDto } from './dto/pGenAvisoVenLcs.dto';
import { SpRegistraRgsDto } from './dto/spRegistraRgs.dto';
import { SpGenRgDto } from './dto/spGenRg.dto';
import { SpRegistraLcDto } from './dto/spRegistraLc.dto';
import { SpGenLcDto } from './dto/spGenLc.dto';

@Injectable()
export class PkComerLcService {
    constructor(
        @InjectRepository(ComerParametrosmodEntity) private entity: Repository<ComerParametrosmodEntity>
    ) { }
    //---------------------------------------------------------------------------------------------
    async pObtDatlc(dataBody: PObtDatlcDto) {
        const { p_PARAMETRO, p_ID_TPEVENTO, p_DIRECCION, p_IND_MOV, p_NUM_DIAS, p_TIPO_LC, p_TABLA_APLICA,
            p_IND_FEC, p_IND_MONTO } = dataBody


        let c_VALOR
        let n_NUM_DIAS
        let c_TIPO_LC
        let c_TABLA_APLICA
        let c_IND_FEC
        let c_IND_MONTO
        let c_RESUL
        let e_EXCEPPROC
        let n_VALIDA
        let c_LLAVE

        let c_PARAMETRO = p_PARAMETRO
        let n_ID_TPEVENTO = p_ID_TPEVENTO
        let c_DIRECCION = p_DIRECCION
        let c_IND_MOV = p_IND_MOV
        let p_RESUL = 'ok'






        try {
            c_VALOR = await this.entity.query(`SELECT VALOR as c_VALOR FROM sera.COMER_PARAMETROSMOD WHERE PARAMETRO = '${c_PARAMETRO}'`)
            if (c_VALOR.length === 0) { console.log('error c_VALOR') }
            c_VALOR = c_VALOR[0]['c_valor']

            c_LLAVE = c_DIRECCION || n_ID_TPEVENTO.split(' ').join('').toString()
            n_VALIDA = c_VALOR.indexOf(c_LLAVE) + 1
            if (n_VALIDA === 0) { console.log('error n_VALIDA') }
            // linea 88
            //c_VALOR = c_VALOR.substr(c_VALOR, c_VALOR.indexOf(c_LLAVE))


            return {
                status: 'ok',
                data: c_VALOR
            }
        } catch (error) {
            return { error: error.message }
        }
    }
    //---------------------------------------------------------------------------------------------
    async spGenLc(dataBody: SpGenLcDto) {
        const {  } = dataBody
        try {
            return {
                status: 'ok',
                data: true
            }
        } catch (error) {
            return { error: error.message }
        }
    }
    //---------------------------------------------------------------------------------------------
    async spRegistraLc(dataBody: SpRegistraLcDto) {
        const {  } = dataBody
        try {
            return {
                status: 'ok',
                data: true
            }
        } catch (error) {
            return { error: error.message }
        }
    }
    //---------------------------------------------------------------------------------------------
    async spGenRg(dataBody: SpGenRgDto) {
        const {  } = dataBody
        try {
            return {
                status: 'ok',
                data: true
            }
        } catch (error) {
            return { error: error.message }
        }
    }
    //---------------------------------------------------------------------------------------------
    async spRegistraRgs(dataBody: SpRegistraRgsDto) {
        const {  } = dataBody
        try {
            return {
                status: 'ok',
                data: true
            }
        } catch (error) {
            return { error: error.message }
        }
    }
    //---------------------------------------------------------------------------------------------
    async pComerGenCorreosLcs() {
        try {
            return {
                status: 'ok',
                data: true
            }
        } catch (error) {
            return { error: error.message }
        }
    }
    //---------------------------------------------------------------------------------------------
    async pComerGenCorreosLcsHtml() {
        try {
            return {
                status: 'ok',
                data: true
            }
        } catch (error) {
            return { error: error.message }
        }
    }
    //---------------------------------------------------------------------------------------------
    async pGenAvisoVenLcs(dataBody: PGenAvisoVenLcsDto) {
        const { } = dataBody
        try {
            return {
                status: 'ok',
                data: true
            }
        } catch (error) {
            return { error: error.message }
        }
    }
    //---------------------------------------------------------------------------------------------
}
