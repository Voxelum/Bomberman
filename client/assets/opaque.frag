#version 330 core

#define NUM_CASCADES 3

uniform sampler2D u_Texture;
uniform sampler2D u_NormalMap;

uniform bool u_UseNormalMap;

in vec4 v_Color;
in vec3 v_Normal;
in vec2 v_UV;

in vec4 v_WorldSpacePos;
in vec4 v_SceenSpacePos;
in vec4 v_ClipSpacePos;

in vec4 v_LightSpacePos[NUM_CASCADES];

out vec4 fragColor;

vec4 computeFog(vec4 color);

float computeShadow();

//vec3 compute_normal() {
//    if (!u_UseNormalMap) return v_Normal;
//    vec3 norm = v_Normal;
//    norm = texture(u_NormalMap, v_UV).rgb;
//    norm = normalize(norm * 2 - 1);
//    norm = normalize(u_ViewMatrix * vec4(norm, 0.0)).xyz;
//    return norm;
//}

void main() {
    vec4 color = texture(u_Texture, v_UV);
    color.rgb += v_Color.rgb;

    float shadow = computeShadow();
    color = clamp(vec4(color.rgb * shadow, color.a), 0, 1);

    color = computeFog(color);

    if (color.a <= 0.1) {
        discard;
    }
    fragColor = color;
}
