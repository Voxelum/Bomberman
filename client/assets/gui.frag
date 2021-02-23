#version 330 core

in vec4 vertexColor;
in vec2 textureCoord;

out vec4 fragColor;

uniform sampler2D texImage;
uniform bool usingAlpha;
uniform bool hasTexture;

void main()
{
    if (hasTexture) {
        if (usingAlpha) {
//            fragColor = (texture(texImage, textureCoord) + vertexColor) / 2;
            fragColor = vec4(vertexColor.rgb, texture(texImage, textureCoord).r * vertexColor.a);
        } else {
            fragColor = vertexColor * texture(texImage, textureCoord);
        }
    } else {
        fragColor = vertexColor;
    }
}