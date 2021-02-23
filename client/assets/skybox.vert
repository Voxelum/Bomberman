#version 330

layout (location=0) in vec3 position;
layout (location=1) in vec2 texCoord;
layout (location=2) in vec3 vertexNormal;

out vec2 v_TextureCoord;
out vec3 v_Position;

uniform mat4 u_View;
uniform mat4 u_Projection;

const vec2 data[4] = vec2[](
    vec2(-100, 100), vec2(-100, -100),
    vec2(100, 100), vec2(100, -100)
);

void main()
{
    gl_Position = u_Projection * u_View * vec4(position, 1.0);
    v_Position = position;
    v_TextureCoord = texCoord;
}