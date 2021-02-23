#version 330 core

uniform mat4 u_ModelMatrix;

layout (std140) uniform Matrices
{
    mat4 u_ProjMatrix;
    mat4 u_ViewMatrix;
};

layout (location = 0) in vec4 a_Position;

void main() {
	vec4 worldPos = u_ModelMatrix * a_Position;
    gl_Position = u_ProjMatrix * u_ViewMatrix * worldPos;
}
