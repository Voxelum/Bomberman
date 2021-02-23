#version 330 core

//uniform mat4 u_ViewMatrix;
//uniform mat4 u_ProjMatrix;
uniform mat4 u_ModelMatrix;
uniform mat4 u_LightViewMatrix;

layout (std140) uniform Matrices
{
    mat4 u_ProjMatrix;
    mat4 u_ViewMatrix;
};

//layout (std140) uniform Flags {
//    bool u_UseShadowMap;
//    bool u_UseNormalMap;
//    bool u_UseFog;
//};

layout (location = 0) in vec4 a_Position;
layout (location = 1) in vec2 a_Texcoord;
layout (location = 2) in vec3 a_Normal;
layout (location = 3) in vec4 a_Color;

out vec2 v_UV;
out vec4 v_LightViewVertexPos;
out vec3 v_Normal;
out vec4 v_Color;
//out vec3 v_LightDirection;

void main() {
    vec4 worldPos = u_ModelMatrix * a_Position;
    gl_Position = u_ProjMatrix * u_ViewMatrix * worldPos;
    v_UV = a_Texcoord;
    v_LightViewVertexPos = u_LightViewMatrix * u_ModelMatrix * a_Position;
    v_Color = a_Color;
    v_Normal = normalize(u_ViewMatrix * vec4(a_Normal, 0)).xyz;
//    v_LightDirection = normalize(u_LightPosition - worldPos.xyz);
}
