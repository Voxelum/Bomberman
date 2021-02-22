export const TIMEOUT_IGNORED: number = -1;
export const ZERO: number = 0;
export const NO_ERROR: number = 0;
export const NONE: number = 0;
export const ONE: number = 1;
export const POINTS: number = 0x0000;
export const SYNC_FLUSH_COMMANDS_BIT: number = 0x00000001;
export const DEPTH_BUFFER_BIT: number = 0x00000100;
export const STENCIL_BUFFER_BIT: number = 0x00000400;
export const COLOR_BUFFER_BIT: number = 0x00004000;
export const LINES: number = 0x0001;
export const LINE_LOOP: number = 0x0002;
export const LINE_STRIP: number = 0x0003;
export const TRIANGLES: number = 0x0004;
export const TRIANGLE_STRIP: number = 0x0005;
export const TRIANGLE_FAN: number = 0x0006;
export const NEVER: number = 0x0200;
export const LESS: number = 0x0201;
export const EQUAL: number = 0x0202;
export const LEQUAL: number = 0x0203;
export const GREATER: number = 0x0204;
export const NOTEQUAL: number = 0x0205;
export const GEQUAL: number = 0x0206;
export const ALWAYS: number = 0x0207;
export const SRC_COLOR: number = 0x0300;
export const ONE_MINUS_SRC_COLOR: number = 0x0301;
export const SRC_ALPHA: number = 0x0302;
export const ONE_MINUS_SRC_ALPHA: number = 0x0303;
export const DST_ALPHA: number = 0x0304;
export const ONE_MINUS_DST_ALPHA: number = 0x0305;
export const DST_COLOR: number = 0x0306;
export const ONE_MINUS_DST_COLOR: number = 0x0307;
export const SRC_ALPHA_SATURATE: number = 0x0308;
export const FRONT: number = 0x0404;
export const BACK: number = 0x0405;
export const FRONT_AND_BACK: number = 0x0408;
export const INVALID_ENUM: number = 0x0500;
export const INVALID_VALUE: number = 0x0501;
export const INVALID_OPERATION: number = 0x0502;
export const OUT_OF_MEMORY: number = 0x0505;
export const INVALID_FRAMEBUFFER_OPERATION: number = 0x0506;
export const CW: number = 0x0900;
export const CCW: number = 0x0901;
export const LINE_WIDTH: number = 0x0B21;
export const CULL_FACE: number = 0x0B44;
export const CULL_FACE_MODE: number = 0x0B45;
export const FRONT_FACE: number = 0x0B46;
export const DEPTH_RANGE: number = 0x0B70;
export const DEPTH_TEST: number = 0x0B71;
export const DEPTH_WRITEMASK: number = 0x0B72;
export const DEPTH_CLEAR_VALUE: number = 0x0B73;
export const DEPTH_FUNC: number = 0x0B74;
export const STENCIL_TEST: number = 0x0B90;
export const STENCIL_CLEAR_VALUE: number = 0x0B91;
export const STENCIL_FUNC: number = 0x0B92;
export const STENCIL_VALUE_MASK: number = 0x0B93;
export const STENCIL_FAIL: number = 0x0B94;
export const STENCIL_PASS_DEPTH_FAIL: number = 0x0B95;
export const STENCIL_PASS_DEPTH_PASS: number = 0x0B96;
export const STENCIL_REF: number = 0x0B97;
export const STENCIL_WRITEMASK: number = 0x0B98;
export const VIEWPORT: number = 0x0BA2;
export const DITHER: number = 0x0BD0;
export const BLEND: number = 0x0BE2;
export const READ_BUFFER: number = 0x0C02;
export const SCISSOR_BOX: number = 0x0C10;
export const SCISSOR_TEST: number = 0x0C11;
export const COLOR_CLEAR_VALUE: number = 0x0C22;
export const COLOR_WRITEMASK: number = 0x0C23;
export const UNPACK_ROW_LENGTH: number = 0x0CF2;
export const UNPACK_SKIP_ROWS: number = 0x0CF3;
export const UNPACK_SKIP_PIXELS: number = 0x0CF4;
export const UNPACK_ALIGNMENT: number = 0x0CF5;
export const PACK_ROW_LENGTH: number = 0x0D02;
export const PACK_SKIP_ROWS: number = 0x0D03;
export const PACK_SKIP_PIXELS: number = 0x0D04;
export const PACK_ALIGNMENT: number = 0x0D05;
export const MAX_TEXTURE_SIZE: number = 0x0D33;
export const MAX_VIEWPORT_DIMS: number = 0x0D3A;
export const SUBPIXEL_BITS: number = 0x0D50;
export const RED_BITS: number = 0x0D52;
export const GREEN_BITS: number = 0x0D53;
export const BLUE_BITS: number = 0x0D54;
export const ALPHA_BITS: number = 0x0D55;
export const DEPTH_BITS: number = 0x0D56;
export const STENCIL_BITS: number = 0x0D57;
export const TEXTURE_2D: number = 0x0DE1;
export const DONT_CARE: number = 0x1100;
export const FASTEST: number = 0x1101;
export const NICEST: number = 0x1102;
export const BYTE: number = 0x1400;
export const UNSIGNED_BYTE: number = 0x1401;
export const SHORT: number = 0x1402;
export const UNSIGNED_SHORT: number = 0x1403;
export const INT: number = 0x1404;
export const UNSIGNED_INT: number = 0x1405;
export const FLOAT: number = 0x1406;
export const HALF_FLOAT: number = 0x140B;
export const INVERT: number = 0x150A;
export const TEXTURE: number = 0x1702;
export const COLOR: number = 0x1800;
export const DEPTH: number = 0x1801;
export const STENCIL: number = 0x1802;
export const STENCIL_INDEX: number = 0x1901;
export const DEPTH_COMPONENT: number = 0x1902;
export const RED: number = 0x1903;
export const ALPHA: number = 0x1906;
export const RGB: number = 0x1907;
export const RGBA: number = 0x1908;
export const LUMINANCE: number = 0x1909;
export const LUMINANCE_ALPHA: number = 0x190A;
export const KEEP: number = 0x1E00;
export const REPLACE: number = 0x1E01;
export const INCR: number = 0x1E02;
export const DECR: number = 0x1E03;
export const VENDOR: number = 0x1F00;
export const RENDERER: number = 0x1F01;
export const VERSION: number = 0x1F02;
export const NEAREST: number = 0x2600;
export const LINEAR: number = 0x2601;
export const NEAREST_MIPMAP_NEAREST: number = 0x2700;
export const LINEAR_MIPMAP_NEAREST: number = 0x2701;
export const NEAREST_MIPMAP_LINEAR: number = 0x2702;
export const LINEAR_MIPMAP_LINEAR: number = 0x2703;
export const TEXTURE_MAG_FILTER: number = 0x2800;
export const TEXTURE_MIN_FILTER: number = 0x2801;
export const TEXTURE_WRAP_S: number = 0x2802;
export const TEXTURE_WRAP_T: number = 0x2803;
export const REPEAT: number = 0x2901;
export const POLYGON_OFFSET_UNITS: number = 0x2A00;
export const CONSTANT_COLOR: number = 0x8001;
export const ONE_MINUS_CONSTANT_COLOR: number = 0x8002;
export const CONSTANT_ALPHA: number = 0x8003;
export const ONE_MINUS_CONSTANT_ALPHA: number = 0x8004;
export const BLEND_COLOR: number = 0x8005;
export const FUNC_ADD: number = 0x8006;
export const MIN: number = 0x8007;
export const MAX: number = 0x8008;
export const BLEND_EQUATION: number = 0x8009;
export const BLEND_EQUATION_RGB: number = 0x8009;
export const FUNC_SUBSTRACT: number = 0x800A;
export const FUNC_REVERSE_SUBTRACT: number = 0x800B;
export const UNSIGNED_SHORT_4_4_4_4: number = 0x8033;
export const UNSIGNED_SHORT_5_5_5_1: number = 0x8034;
export const POLYGON_OFFSET_FILL: number = 0x8037;
export const POLYGON_OFFSET_FACTOR: number = 0x8038;
export const RGB8: number = 0x8051;
export const RGBA4: number = 0x8056;
export const RGB5_A1: number = 0x8057;
export const RGBA8: number = 0x8058;
export const RGB10_A2: number = 0x8059;
export const TEXTURE_BINDING_2D: number = 0x8069;
export const TEXTURE_BINDING_3D: number = 0x806A;
export const UNPACK_SKIP_IMAGES: number = 0x806D;
export const UNPACK_IMAGE_HEIGHT: number = 0x806E;
export const TEXTURE_3D: number = 0x806F;
export const TEXTURE_WRAP_R: number = 0x8072;
export const MAX_3D_TEXTURE_SIZE: number = 0x8073;
export const SAMPLE_ALPHA_TO_COVERAGE: number = 0x809E;
export const SAMPLE_COVERAGE: number = 0x80A0;
export const SAMPLE_BUFFERS: number = 0x80A8;
export const SAMPLES: number = 0x80A9;
export const SAMPLE_COVERAGE_VALUE: number = 0x80AA;
export const SAMPLE_COVERAGE_INVERT: number = 0x80AB;
export const BLEND_DST_RGB: number = 0x80C8;
export const BLEND_SRC_RGB: number = 0x80C9;
export const BLEND_DST_ALPHA: number = 0x80CA;
export const BLEND_SRC_ALPHA: number = 0x80CB;
export const MAX_ELEMENTS_VERTICES: number = 0x80E8;
export const MAX_ELEMENTS_INDICES: number = 0x80E9;
export const CLAMP_TO_EDGE: number = 0x812F;
export const TEXTURE_MIN_LOD: number = 0x813A;
export const TEXTURE_MAX_LOD: number = 0x813B;
export const TEXTURE_BASE_LEVEL: number = 0x813C;
export const TEXTURE_MAX_LEVEL: number = 0x813D;
export const GENERATE_MIPMAP_HINT: number = 0x8192;
export const DEPTH_COMPONENT16: number = 0x81A5;
export const DEPTH_COMPONENT24: number = 0x81A6;
export const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: number = 0x8210;
export const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: number = 0x8211;
export const FRAMEBUFFER_ATTACHMENT_RED_SIZE: number = 0x8212;
export const FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: number = 0x8213;
export const FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: number = 0x8214;
export const FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: number = 0x8215;
export const FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: number = 0x8216;
export const FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: number = 0x8217;
export const FRAMEBUFFER_DEFAULT: number = 0x8218;
export const DEPTH_STENCIL_ATTACHMENT: number = 0x821A;
export const RG: number = 0x8227;
export const RG_INTEGER: number = 0x8228;
export const R8: number = 0x8229;
export const RG8: number = 0x822B;
export const R16F: number = 0x822D;
export const R32F: number = 0x822E;
export const RG16F: number = 0x822F;
export const RG32F: number = 0x8230;
export const R8I: number = 0x8231;
export const R8UI: number = 0x8232;
export const R16I: number = 0x8233;
export const R16UI: number = 0x8234;
export const R32I: number = 0x8235;
export const R32UI: number = 0x8236;
export const RG8I: number = 0x8237;
export const RG8UI: number = 0x8238;
export const RG16I: number = 0x8239;
export const RG16UI: number = 0x823A;
export const RG32I: number = 0x823B;
export const RG32UI: number = 0x823C;
export const TEXTURE_IMMUTABLE_LEVELS: number = 0x82DF;
export const UNSIGNED_SHORT_5_6_5: number = 0x8363;
export const UNSIGNED_INT_2_10_10_10_REV: number = 0x8368;
export const MIRRORED_REPEAT: number = 0x8370;
export const ALIASED_POINT_SIZE_RANGE: number = 0x846D;
export const ALIASED_LINE_WIDTH_RANGE: number = 0x846E;
export const TEXTURE0: number =	0x84C0;
export const TEXTURE1: number =	0x84C1;
export const TEXTURE2: number =	0x84C2;
export const TEXTURE3: number =	0x84C3;
export const TEXTURE4: number =	0x84C4;
export const TEXTURE5: number =	0x84C5;
export const TEXTURE6: number =	0x84C6;
export const TEXTURE7: number =	0x84C7;
export const TEXTURE8: number =	0x84C8;
export const TEXTURE9: number =	0x84C9;
export const TEXTURE10: number =	0x84CA;
export const TEXTURE11: number =	0x84CB;
export const TEXTURE12: number =	0x84CC;
export const TEXTURE13: number =	0x84CD;
export const TEXTURE14: number =	0x84CE;
export const TEXTURE15: number =	0x84CF;
export const TEXTURE16: number =	0x84D0;
export const TEXTURE17: number =	0x84D1;
export const TEXTURE18: number =	0x84D2;
export const TEXTURE19: number =	0x84D3;
export const TEXTURE20: number =	0x84D4;
export const TEXTURE21: number =	0x84D5;
export const TEXTURE22: number =	0x84D6;
export const TEXTURE23: number =	0x84D7;
export const TEXTURE24: number =	0x84D8;
export const TEXTURE25: number =	0x84D9;
export const TEXTURE26: number =	0x84DA;
export const TEXTURE27: number =	0x84DB;
export const TEXTURE28: number =	0x84DC;
export const TEXTURE29: number =	0x84DD;
export const TEXTURE30: number =	0x84DE;
export const TEXTURE31: number =	0x84CF;
export const ACTIVE_TEXTURE: number = 0x84E0;
export const MAX_RENDERBUFFER_SIZE: number = 0x84E8;
export const DEPTH_STENCIL: number = 0x84F9;
export const UNSIGNED_INT_24_8: number = 0x84FA;
export const MAX_TEXTURE_LOD_BIAS: number = 0x84FD;
export const INCR_WRAP: number = 0x8507;
export const DECR_WRAP: number = 0x8508;
export const TEXTURE_CUBE_MAP: number = 0x8513;
export const TEXTURE_BINDING_CUBE_MAP: number = 0x8514;
export const TEXTURE_CUBE_MAP_POSITIVE_X: number = 0x8515;
export const TEXTURE_CUBE_MAP_NEGATIVE_X: number = 0x8516;
export const TEXTURE_CUBE_MAP_POSITIVE_Y: number = 0x8517;
export const TEXTURE_CUBE_MAP_NEGATIVE_Y: number = 0x8518;
export const TEXTURE_CUBE_MAP_POSITIVE_Z: number = 0x8519;
export const TEXTURE_CUBE_MAP_NEGATIVE_Z: number = 0x851A;
export const MAX_CUBE_MAP_TEXTURE_SIZE: number = 0x851C;
export const VERTEX_ARRAY_BINDING: number = 0x85B5;
export const VERTEX_ATTRIB_ARRAY_ENABLED: number = 0x8622;
export const VERTEX_ATTRIB_ARRAY_SIZE: number = 0x8623;
export const VERTEX_ATTRIB_ARRAY_STRIDE: number = 0x8624;
export const VERTEX_ATTRIB_ARRAY_TYPE: number = 0x8625;
export const CURRENT_VERTEX_ATTRIB: number = 0x8626;
export const VERTEX_ATTRIB_ARRAY_POINTER: number = 0x8645;
export const COMPRESSED_TEXTURE_FORMATS: number = 0x86A3;
export const BUFFER_SIZE: number = 0x8764;
export const BUFFER_USAGE: number = 0x8765;
export const STENCIL_BACK_FUNC: number = 0x8800;
export const STENCIL_BACK_FAIL: number = 0x8801;
export const STENCIL_BACK_PASS_DEPTH_FAIL: number = 0x8802;
export const STENCIL_BACK_PASS_DEPTH_PASS: number = 0x8803;
export const RGBA32F: number = 0x8814;
export const RGB32F: number = 0x8815;
export const RGBA16F: number = 0x881A;
export const RGB16F: number = 0x881B;
export const MAX_DRAW_BUFFERS: number = 0x8824;
export const DRAW_BUFFER0: number = 0x8825;
export const DRAW_BUFFER1: number = 0x8826;
export const DRAW_BUFFER2: number = 0x8827;
export const DRAW_BUFFER3: number = 0x8828;
export const DRAW_BUFFER4: number = 0x8829;
export const DRAW_BUFFER5: number = 0x882A;
export const DRAW_BUFFER6: number = 0x882B;
export const DRAW_BUFFER7: number = 0x882C;
export const DRAW_BUFFER8: number = 0x882D;
export const DRAW_BUFFER9: number = 0x882E;
export const DRAW_BUFFER10: number = 0x882F;
export const DRAW_BUFFER11: number = 0x8830;
export const DRAW_BUFFER12: number = 0x8831;
export const DRAW_BUFFER13: number = 0x8832;
export const DRAW_BUFFER14: number = 0x8833;
export const DRAW_BUFFER15: number = 0x8834;
export const BLEND_EQUATION_ALPHA: number = 0x883D;
export const TEXTURE_COMPARE_MODE: number = 0x884C;
export const TEXTURE_COMPARE_FUNC: number = 0x884D;
export const COMPARE_REF_TO_TEXTURE: number = 0x884E;
export const CURRENT_QUERY: number = 0x8865;
export const QUERY_RESULT: number = 0x8866;
export const QUERY_RESULT_AVAILABLE: number = 0x8867;
export const MAX_VERTEX_ATTRIBS: number = 0x8869;
export const VERTEX_ATTRIB_ARRAY_NORMALIZED: number = 0x886A;
export const MAX_TEXTURE_IMAGE_UNITS: number = 0x8872;
export const ARRAY_BUFFER: number = 0x8892;
export const ELEMENT_ARRAY_BUFFER: number = 0x8893;
export const ARRAY_BUFFER_BINDING: number = 0x8894;
export const ELEMENT_ARRAY_BUFFER_BINDING: number = 0x8895;
export const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number = 0x889F;
export const STREAM_DRAW: number = 0x88E0;
export const STREAM_READ: number = 0x88E1;
export const STREAM_COPY: number = 0x88E2;
export const STATIC_DRAW: number = 0x88E4;
export const STATIC_READ: number = 0x88E5;
export const STATIC_COPY: number = 0x88E6;
export const DYNAMIC_DRAW: number = 0x88E8;
export const DYNAMIC_READ: number = 0x88E9;
export const DYNAMIC_COPY: number = 0x88EA;
export const PIXEL_PACK_BUFFER: number = 0x88EB;
export const PIXEL_UNPACK_BUFFER: number = 0x88EC;
export const PIXEL_PACK_BUFFER_BINDING: number = 0x88ED;
export const PIXEL_UNPACK_BUFFER_BINDING: number = 0x88EF;
export const DEPTH24_STENCIL8: number = 0x88F0;
export const VERTEX_ATTRIB_ARRAY_INTEGER: number = 0x88FD;
export const VERTEX_ATTRIB_ARRAY_DIVISOR: number = 0x88FE;
export const MAX_ARRAY_TEXTURE_LAYERS: number = 0x88FF;
export const MIN_PROGRAM_TEXEL_OFFSET: number = 0x8904;
export const MAX_PROGRAM_TEXEL_OFFSET: number = 0x8905;
export const SAMPLER_BINDING: number = 0x8919;
export const UNIFORM_BUFFER: number = 0x8A11;
export const UNIFORM_BUFFER_BINDING: number = 0x8A28;
export const UNIFORM_BUFFER_START: number = 0x8A29;
export const UNIFORM_BUFFER_SIZE: number = 0x8A2A;
export const MAX_VERTEX_UNIFORM_BLOCKS: number = 0x8A2B;
export const MAX_FRAGMENT_UNIFORM_BLOCKS: number = 0x8A2D;
export const MAX_COMBINED_UNIFORM_BLOCKS: number = 0x8A2E;
export const MAX_UNIFORM_BUFFER_BINDINGS: number = 0x8A2F;
export const MAX_UNIFORM_BLOCK_SIZE: number = 0x8A30;
export const MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: number = 0x8A31;
export const MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: number = 0x8A33;
export const UNIFORM_BUFFER_OFFSET_ALIGNMENT: number = 0x8A34;
export const ACTIVE_UNIFORM_BLOCKS: number = 0x8A36;
export const UNIFORM_TYPE: number = 0x8A37;
export const UNIFORM_SIZE: number = 0x8A38;
export const UNIFORM_BLOCK_INDEX: number = 0x8A3A;
export const UNIFORM_OFFSET: number = 0x8A3B;
export const UNIFORM_ARRAY_STRIDE: number = 0x8A3C;
export const UNIFORM_MATRIX_STRIDE: number = 0x8A3D;
export const UNIFORM_IS_ROW_MAJOR: number = 0x8A3E;
export const UNIFORM_BLOCK_BINDING: number = 0x8A3F;
export const UNIFORM_BLOCK_DATA_SIZE: number = 0x8A40;
export const UNIFORM_BLOCK_ACTIVE_UNIFORMS: number = 0x8A42;
export const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: number = 0x8A43;
export const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: number = 0x8A44;
export const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: number = 0x8A46;
export const FRAGMENT_SHADER: number = 0x8B30;
export const VERTEX_SHADER: number = 0x8B31;
export const MAX_FRAGMENT_UNIFORM_COMPONENTS: number = 0x8B49;
export const MAX_VERTEX_UNIFORM_COMPONENTS: number = 0x8B4A;
export const MAX_VARYING_COMPONENTS: number = 0x8B4B;
export const MAX_VERTEX_TEXTURE_IMAGE_UNITS: number = 0x8B4C;
export const MAX_COMBINED_TEXTURE_IMAGE_UNITS: number = 0x8B4D;
export const SHADER_TYPE: number = 0x8B4F;
export const FLOAT_VEC2: number = 0x8B50;
export const FLOAT_VEC3: number = 0x8B51;
export const FLOAT_VEC4: number = 0x8B52;
export const INT_VEC2: number = 0x8B53;
export const INT_VEC3: number = 0x8B54;
export const INT_VEC4: number = 0x8B55;
export const BOOL: number = 0x8B56;
export const BOOL_VEC2: number = 0x8B57;
export const BOOL_VEC3: number = 0x8B58;
export const BOOL_VEC4: number = 0x8B59;
export const FLOAT_MAT2: number = 0x8B5A;
export const FLOAT_MAT3: number = 0x8B5B;
export const FLOAT_MAT4: number = 0x8B5C;
export const SAMPLER_2D: number = 0x8B5E;
export const SAMPLER_3D: number = 0x8B5F;
export const SAMPLER_CUBE: number = 0x8B60;
export const SAMPLER_2D_SHADOW: number = 0x8B62;
export const FLOAT_MAT2x3: number = 0x8B65;
export const FLOAT_MAT2x4: number = 0x8B66;
export const FLOAT_MAT3x2: number = 0x8B67;
export const FLOAT_MAT3x4: number = 0x8B68;
export const FLOAT_MAT4x2: number = 0x8B69;
export const FLOAT_MAT4x3: number = 0x8B6A;
export const DELETE_STATUS: number = 0x8B80;
export const COMPILE_STATUS: number = 0x8B81;
export const LINK_STATUS: number = 0x8B82;
export const VALIDATE_STATUS: number = 0x8B83;
export const ATTACHED_SHADERS: number = 0x8B85;
export const ACTIVE_UNIFORMS: number = 0x8B86;
export const ACTIVE_ATTRIBUTES: number = 0x8B89;
export const FRAGMENT_SHADER_DERIVATIVE_HINT: number = 0x8B8B;
export const SHADING_LANGUAGE_VERSION: number = 0x8B8C;
export const CURRENT_PROGRAM: number = 0x8B8D;
export const IMPLEMENTATION_COLOR_READ_TYPE: number = 0x8B9A;
export const IMPLEMENTATION_COLOR_READ_FORMAT: number = 0x8B9B;
export const UNSIGNED_NORMALIZED: number = 0x8C17;
export const TEXTURE_2D_ARRAY: number = 0x8C1A;
export const TEXTURE_BINDING_2D_ARRAY: number = 0x8C1D;
export const ANY_SAMPLES_PASSED: number = 0x8C2F;
export const R11F_G11F_B10F: number = 0x8C3A;
export const UNSIGNED_INT_10F_11F_11F_REV: number = 0x8C3B;
export const RGB9_E5: number = 0x8C3D;
export const UNSIGNED_INT_5_9_9_9_REV: number = 0x8C3E;
export const SRGB: number = 0x8C40;
export const SRGB8: number = 0x8C41;
export const SRGB8_ALPHA8: number = 0x8C43;
export const TRANSFORM_FEEDBACK_BUFFER_MODE: number = 0x8C7F;
export const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: number = 0x8C80;
export const TRANSFORM_FEEDBACK_VARYINGS: number = 0x8C83;
export const TRANSFORM_FEEDBACK_BUFFER_START: number = 0x8C84;
export const TRANSFORM_FEEDBACK_BUFFER_SIZE: number = 0x8C85;
export const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: number = 0x8C88;
export const RASTERIZER_DISCARD: number = 0x8C89;
export const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: number = 0x8C8A;
export const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: number = 0x8C8B;
export const INTERLEAVED_ATTRIBS: number = 0x8C8C;
export const SEPARATE_ATTRIBS: number = 0x8C8D;
export const TRANSFORM_FEEDBACK_BUFFER: number = 0x8C8E;
export const TRANSFORM_FEEDBACK_BUFFER_BINDING: number = 0x8C8F;
export const STENCIL_BACK_REF: number = 0x8CA3;
export const STENCIL_BACK_VALUE_MASK: number = 0x8CA4;
export const STENCIL_BACK_WRITEMASK: number = 0x8CA5;
export const FRAMEBUFFER_BINDING: number = 0x8CA6;
export const DRAW_FRAMEBUFFER_BINDING: number = 0x8CA6;
export const RENDERBUFFER_BINDING: number = 0x8CA7;
export const READ_FRAMEBUFFER: number = 0x8CA8;
export const DRAW_FRAMEBUFFER: number = 0x8CA9;
export const READ_FRAMEBUFFER_BINDING: number = 0x8CAA;
export const RENDERBUFFER_SAMPLES: number = 0x8CAB;
export const DEPTH_COMPONENT32F: number = 0x8CAC;
export const DEPTH32F_STENCIL8: number = 0x8CAD;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number = 0x8CD0;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number = 0x8CD1;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number = 0x8CD2;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number = 0x8CD3;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: number = 0x8CD4;
export const FRAMEBUFFER_COMPLETE: number = 0x8CD5;
export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number = 0x8CD6;
export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number = 0x8CD7;
export const FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number = 0x8CD9;
export const FRAMEBUFFER_UNSUPPORTED: number = 0x8CDD;
export const MAX_COLOR_ATTACHMENTS: number = 0x8CDF;
export const COLOR_ATTACHMENT0: number = 0x8CE0;
export const COLOR_ATTACHMENT1: number = 0x8CE1;
export const COLOR_ATTACHMENT2: number = 0x8CE2;
export const COLOR_ATTACHMENT3: number = 0x8CE3;
export const COLOR_ATTACHMENT4: number = 0x8CE4;
export const COLOR_ATTACHMENT5: number = 0x8CE5;
export const COLOR_ATTACHMENT6: number = 0x8CE6;
export const COLOR_ATTACHMENT7: number = 0x8CE7;
export const COLOR_ATTACHMENT8: number = 0x8CE8;
export const COLOR_ATTACHMENT9: number = 0x8CE9;
export const COLOR_ATTACHMENT10: number = 0x8CEA;
export const COLOR_ATTACHMENT11: number = 0x8CEB;
export const COLOR_ATTACHMENT12: number = 0x8CEC;
export const COLOR_ATTACHMENT13: number = 0x8CED;
export const COLOR_ATTACHMENT14: number = 0x8CEE;
export const COLOR_ATTACHMENT15: number = 0x8CEF;
export const DEPTH_ATTACHMENT: number = 0x8D00;
export const STENCIL_ATTACHMENT: number = 0x8D20;
export const FRAMEBUFFER: number = 0x8D40;
export const RENDERBUFFER: number = 0x8D41;
export const RENDERBUFFER_WIDTH: number = 0x8D42;
export const RENDERBUFFER_HEIGHT: number = 0x8D43;
export const RENDERBUFFER_INTERNAL_FORMAT: number = 0x8D44;
export const STENCIL_INDEX8: number = 0x8D48;
export const RENDERBUFFER_RED_SIZE: number = 0x8D50;
export const RENDERBUFFER_GREEN_SIZE: number = 0x8D51;
export const RENDERBUFFER_BLUE_SIZE: number = 0x8D52;
export const RENDERBUFFER_ALPHA_SIZE: number = 0x8D53;
export const RENDERBUFFER_DEPTH_SIZE: number = 0x8D54;
export const RENDERBUFFER_STENCIL_SIZE: number = 0x8D55;
export const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: number = 0x8D56;
export const MAX_SAMPLES: number = 0x8D57;
export const RGB565: number = 0x8D62;
export const ANY_SAMPLES_PASSED_CONSERVATIVE: number = 0x8D6A;
export const MAX_ELEMENT_INDEX: number = 0x8D6B;
export const RGBA32UI: number = 0x8D70;
export const RGB32UI: number = 0x8D71;
export const RGBA16UI: number = 0x8D76;
export const RGB16UI: number = 0x8D77;
export const RGBA8UI: number = 0x8D7C;
export const RGB8UI: number = 0x8D7D;
export const RGBA32I: number = 0x8D82;
export const RGB32I: number = 0x8D83;
export const RGBA16I: number = 0x8D88;
export const RGB16I: number = 0x8D89;
export const RGBA8I: number = 0x8D8E;
export const RGB8I: number = 0x8D8F;
export const RED_INTEGER: number = 0x8D94;
export const RGB_INTEGER: number = 0x8D98;
export const RGBA_INTEGER: number = 0x8D99;
export const INT_2_10_10_10_REV: number = 0x8D9F;
export const FLOAT_32_UNSIGNED_INT_24_8_REV: number = 0x8DAD;
export const SAMPLER_2D_ARRAY: number = 0x8DC1;
export const SAMPLER_2D_ARRAY_SHADOW: number = 0x8DC4;
export const SAMPLER_CUBE_SHADOW: number = 0x8DC5;
export const UNSIGNED_INT_VEC2: number = 0x8DC6;
export const UNSIGNED_INT_VEC3: number = 0x8DC7;
export const UNSIGNED_INT_VEC4: number = 0x8DC8;
export const INT_SAMPLER_2D: number = 0x8DCA;
export const INT_SAMPLER_3D: number = 0x8DCB;
export const INT_SAMPLER_CUBE: number = 0x8DCC;
export const INT_SAMPLER_2D_ARRAY: number = 0x8DCF;
export const UNSIGNED_INT_SAMPLER_2D: number = 0x8DD2;
export const UNSIGNED_INT_SAMPLER_3D: number = 0x8DD3;
export const UNSIGNED_INT_SAMPLER_CUBE: number = 0x8DD4;
export const UNSIGNED_INT_SAMPLER_2D_ARRAY: number = 0x8DD7;
export const LOW_FLOAT: number = 0x8DF0;
export const MEDIUM_FLOAT: number = 0x8DF1;
export const HIGH_FLOAT: number = 0x8DF2;
export const LOW_INT: number = 0x8DF3;
export const MEDIUM_INT: number = 0x8DF4;
export const HIGH_INT: number = 0x8DF5;
export const MAX_VERTEX_UNIFORM_VECTORS: number = 0x8DFB;
export const MAX_VARYING_VECTORS: number = 0x8DFC;
export const MAX_FRAGMENT_UNIFORM_VECTORS: number = 0x8DFD;
export const TRANSFORM_FEEDBACK: number = 0x8E22;
export const TRANSFORM_FEEDBACK_PAUSED: number = 0x8E23;
export const TRANSFORM_FEEDBACK_ACTIVE: number = 0x8E24;
export const TRANSFORM_FEEDBACK_BINDING: number = 0x8E25;
export const COPY_READ_BUFFER: number = 0x8F36;
export const COPY_READ_BUFFER_BINDING: number = 0x8F36;
export const COPY_WRITE_BUFFER: number = 0x8F37;
export const COPY_WRITE_BUFFER_BINDING: number = 0x8F37;
export const R8_SNORM: number = 0x8F94;
export const RG8_SNORM: number = 0x8F95;
export const RGB8_SNORM: number = 0x8F96;
export const RGBA8_SNORM: number = 0x8F97;
export const SIGNED_NORMALIZED: number = 0x8F9C;
export const RGB10_A2UI: number = 0x906F;
export const MAX_SERVER_WAIT_TIMEOUT: number = 0x9111;
export const OBJECT_TYPE: number = 0x9112;
export const SYNC_CONDITION: number = 0x9113;
export const SYNC_STATUS: number = 0x9114;
export const SYNC_FLAGS: number = 0x9115;
export const SYNC_FENCE: number = 0x9116;
export const SYNC_GPU_COMMANDS_COMPLETE: number = 0x9117;
export const UNSIGNALED: number = 0x9118;
export const SIGNALED: number = 0x9119;
export const ALREADY_SIGNALED: number = 0x911A;
export const TIMEOUT_EXPIRED: number = 0x911B;
export const CONDITION_SATISFIED: number = 0x911C;
export const WAIT_FAILED: number = 0x911D;
export const MAX_VERTEX_OUTPUT_COMPONENTS: number = 0x9122;
export const MAX_FRAGMENT_INPUT_COMPONENTS: number = 0x9125;
export const TEXTURE_IMMUTABLE_FORMAT: number = 0x912F;
export const UNPACK_FLIP_Y_WEBGL: number = 0x9240;
export const UNPACK_PREMULTIPLY_ALPHA_WEBGL: number = 0x9241;
export const CONTEXT_LOST_WEBGL: number = 0x9242;
export const UNPACK_COLORSPACE_CONVERSION_WEBGL: number = 0x9243;
export const BROWSER_DEFAULT_WEBGL: number = 0x9244;
export const MAX_CLIENT_WAIT_TIMEOUT_WEBGL: number = 0x9247;
export const INVALID_INDEX: number = 0xFFFFFFFF;