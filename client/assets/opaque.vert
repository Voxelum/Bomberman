#version 330 core

#define NUM_CASCADES 3

uniform mat4 u_ModelMatrix;
uniform mat4 u_LightViewMatrices[NUM_CASCADES];

layout (std140) uniform Matrices
{
    mat4 u_ProjMatrix;
    mat4 u_ViewMatrix;
};

layout (location = 0) in vec4 a_Position;
layout (location = 1) in vec2 a_Texcoord;
layout (location = 2) in vec3 a_Normal;
layout (location = 3) in vec4 a_Color;

out vec2 v_UV;
out vec3 v_Normal;
out vec4 v_Color;

out vec4 v_WorldSpacePos;
out vec4 v_SceenSpacePos;
out vec4 v_ClipSpacePos;
out vec4 v_LightSpacePos[NUM_CASCADES];

void main() {
    v_UV = a_Texcoord;
    v_Color = a_Color;
    v_Normal = normalize(u_ViewMatrix * vec4(a_Normal, 0)).xyz;

    v_WorldSpacePos = u_ModelMatrix * a_Position;
    v_SceenSpacePos = u_ViewMatrix * v_WorldSpacePos;
    v_ClipSpacePos = u_ProjMatrix * v_SceenSpacePos;
    for (int i = 0 ; i < NUM_CASCADES ; i++) {
        v_LightSpacePos[i] = u_LightViewMatrices[i] * v_WorldSpacePos;
    }
    gl_Position = v_ClipSpacePos;
}
