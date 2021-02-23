#version 330 core

layout (std140) uniform Fog {
    bool enabled;
    float density;
    vec3 color;
} fog;

in vec4 v_SceenSpacePos;

vec4 computeFog(vec4 color) {
    if (!fog.enabled) {
        return color;
    }
    float distance = length(v_SceenSpacePos);
    float fogFactor = 1.0 / exp((distance * fog.density) * (distance * fog.density));
    fogFactor = clamp(fogFactor, 0.0, 1.0);
    vec3 resultColor = mix(fog.color, color.xyz, fogFactor);
    return vec4(resultColor.xyz, color.w);
}
