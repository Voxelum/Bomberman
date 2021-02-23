#version 330

in vec3 v_Position;
in vec2 v_TextureCoord;

uniform vec3 u_SunPosition;
uniform sampler2D u_TextureSampler;

uniform float time = 0.0;
uniform float cirrus = 0.4;
uniform float cumulus = 0.8;

const float Br = 0.0025;
const float Bm = 0.0003;
const float g =  0.9800;
const vec3 nitrogen = vec3(0.650, 0.570, 0.475);
const vec3 Kr = Br / pow(nitrogen, vec3(4.0));
const vec3 Km = Bm / pow(nitrogen, vec3(0.84));

out vec4 fragColor;

vec3 atmosphere(vec3 r, vec3 r0, vec3 pSun, float iSun, float rPlanet, float rAtmos, vec3 kRlh, float kMie, float shRlh, float shMie, float g);

vec3 cloud(vec3 color);

void main()
{
    vec3 normalPosition = normalize(v_Position);
    vec3 normSum = normalize(u_SunPosition) * 1.006;
    vec3 color = atmosphere(
        normalPosition,                 // normalized ray direction
        vec3(0,6372e3,0),               // ray origin
        normSum,                        // position of the sun
        22.0,                           // intensity of the sun
        6371e3,                         // radius of the planet in meters
        6471e3,                         // radius of the atmosphere in meters
//        vec3(5.5e-5, 13.0e-5, 22.4e-5),
        vec3(5.5e-6, 13.0e-6, 22.4e-6), // Rayleigh scattering coefficient
        21e-6,                          // Mie scattering coefficient
        8e3,                            // Rayleigh scale height
        1.2e3,                          // Mie scale height
        0.758                           // Mie preferred scattering direction
    );
    color = cloud(color);

//    float d = clamp(dot(normalPosition, normSum), 0.0, 1.0);
//    float d2 = clamp(dot(vec3(0, 1, 0), normSum), 0.0, 1.0);
//    color = mix(color, color * mix(4.0, 8.0, d2), smoothstep(0.999, 0.9999, d));
    fragColor = vec4(color, 1);

//    color = 1.0 - exp(-1.0 * color);
//
//    fragColor = vec4(color, 1);
//    vec3 light = vec3(1, 1, 1);
//    fragColor = vec4(light, 1) * texture(texture_sampler, outTexCoord);
}