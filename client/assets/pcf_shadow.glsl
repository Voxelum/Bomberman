#version 330 core

#define NUM_CASCADES 3

uniform bool u_UseShadowMap;
uniform sampler2D u_ShadowMaps[NUM_CASCADES];
uniform float u_ShadowCascadeZ[NUM_CASCADES];

in vec4 v_WorldSpacePos;
in vec4 v_SceenSpacePos;
in vec4 v_ClipSpacePos;

in vec4 v_LightSpacePos[NUM_CASCADES];

float computeShadow() {
    if (!u_UseShadowMap) return 1;

    int index = 0;
    for (; index < NUM_CASCADES; index++) {
        if (abs(v_SceenSpacePos.z) <= u_ShadowCascadeZ[index]) {
            break;
        }
    }

    vec4 lightSpacePos = v_LightSpacePos[index];

    vec3 proj_coords = lightSpacePos.xyz / lightSpacePos.w;
    // Transform from screen coordinates to texture coordinates
    proj_coords = proj_coords * 0.5 + 0.5;
    float bias = 0.003;

    float shadow_factor = 0.0;
    vec2 inc = 1.0 / textureSize(u_ShadowMaps[index], 0);
    for(int row = -1; row <= 1; ++row) {
        for(int col = -1; col <= 1; ++col) {
            float depth = texture(u_ShadowMaps[index], proj_coords.xy + vec2(row, col) * inc).r;
            shadow_factor += proj_coords.z - bias > depth ? 1.0 : 0.0;
        }
    }
    shadow_factor /= 9.0;
    if(proj_coords.z > 1.0) {
        shadow_factor = 1.0;
    }

    return 1 - shadow_factor * 0.5;
}
