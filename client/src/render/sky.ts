import opaqueFragShaderUrl from '../assets/opaque.frag';
import opaqueVertShaderUrl from '../assets/opaque.vert';
import expFogGLSLUrl from '../assets/exp_fog.glsl';
import pcfShadowUrl from '../assets/pcf_shadow.glsl'

import { FragmentShader, Program, Uniform, UniformBuffer, UniformBufferObject, VertexShader } from "../lib";

async function createSkyRenderer() {
    const shaders = await Promise.all([
        await fetch(expFogGLSLUrl).then(v => v.text()).then(v => new FragmentShader(v)),
        await fetch(pcfShadowUrl).then(v => v.text()).then(v => new FragmentShader(v)),
        await fetch(opaqueVertShaderUrl).then(v => v.text()).then(v => new VertexShader(v)),
        await fetch(opaqueFragShaderUrl).then(v => v.text()).then(v => new FragmentShader(v)),
    ])
}