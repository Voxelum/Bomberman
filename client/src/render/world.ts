import opaqueFragShaderUrl from '../assets/opaque.frag';
import opaqueVertShaderUrl from '../assets/opaque.vert';
import expFogGLSLUrl from '../assets/exp_fog.glsl';
import pcfShadowUrl from '../assets/pcf_shadow.glsl'

import { FragmentShader, Program, Uniform, UniformBuffer, UniformBufferObject, VertexShader } from "../lib";

export async function createWorldRenderer() {
    const modelMatrix = new Uniform('u_ModelMatrix')
    const texture = new Uniform('u_Texture')
    const useShadowMap = new Uniform('u_UseShadowMap')
    const uniformBuffer = new UniformBuffer()
    const matrices = new UniformBufferObject("Matrices", uniformBuffer)
    const fog = new UniformBufferObject("Fog", uniformBuffer)

    const shaders = await Promise.all([
        await fetch(expFogGLSLUrl).then(v => v.text()).then(v => new FragmentShader(v)),
        await fetch(pcfShadowUrl).then(v => v.text()).then(v => new FragmentShader(v)),
        await fetch(opaqueVertShaderUrl).then(v => v.text()).then(v => new VertexShader(v)),
        await fetch(opaqueFragShaderUrl).then(v => v.text()).then(v => new FragmentShader(v)),
    ])
    const program = new Program({
        shaders
    })
    program.addUniform(modelMatrix)
    program.addUniform(texture)
    program.addUniform(useShadowMap)
    program.addBuffer(uniformBuffer)
    program.addUniformBufferObject(matrices)
    program.addUniformBufferObject(fog)
}
