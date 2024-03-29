// Auto-generated
let project = new Project('web');

project.addSources('Sources');
project.addLibrary("/home/liss22/armory3d/armsdk//armory");
project.addLibrary("/home/liss22/armory3d/armsdk//iron");
project.addParameter('-dce full');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/blur_edge_pass.frag.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/compositor_pass.frag.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/compositor_pass.vert.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/deferred_indirect.frag.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/deferred_indirect.vert.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/deferred_light.frag.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/deferred_light_quad.frag.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/pass.vert.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/pass_lamp_volume.vert.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/pass_viewray.vert.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/ssao_pass.frag.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/world_pass.frag.glsl');
project.addShaders('/home/liss22/webSample/gfx/build_clothes/compiled/Shaders/world_pass.vert.glsl');
project.addShaders('build_clothes/compiled/Shaders//Material_004_mesh.frag.glsl');
project.addShaders('build_clothes/compiled/Shaders//Material_005_mesh.frag.glsl');
project.addShaders('build_clothes/compiled/Shaders//Material_006_mesh.frag.glsl');
project.addShaders('build_clothes/compiled/Shaders//Material_008_mesh.frag.glsl');
project.addShaders('build_clothes/compiled/Shaders//Material_009_mesh.frag.glsl');
project.addShaders('build_clothes/compiled/Shaders//Material_010_mesh.frag.glsl');
project.addShaders('build_clothes/compiled/Shaders//Material_mesh.frag.glsl');
project.addShaders('build_clothes/compiled/Shaders//Material_mesh.vert.glsl');
project.addShaders('build_clothes/compiled/Shaders//Material_shadowmap.frag.glsl');
project.addShaders('build_clothes/compiled/Shaders//Material_shadowmap.vert.glsl');
project.addAssets("build_clothes/compiled/Shaders/Material_004_data.arm", { notinlist: true });
project.addAssets("build_clothes/compiled/Shaders/Material_005_data.arm", { notinlist: true });
project.addAssets("build_clothes/compiled/Shaders/Material_006_data.arm", { notinlist: true });
project.addAssets("build_clothes/compiled/Shaders/Material_008_data.arm", { notinlist: true });
project.addAssets("build_clothes/compiled/Shaders/Material_009_data.arm", { notinlist: true });
project.addAssets("build_clothes/compiled/Shaders/Material_010_data.arm", { notinlist: true });
project.addAssets("build_clothes/compiled/Shaders/Material_data.arm", { notinlist: true });
project.addAssets("build_clothes/compiled/Shaders/shader_datas.arm", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/brdf.png", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/hosek/hosek_radiance.hdr", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/hosek/hosek_radiance_0.hdr", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/hosek/hosek_radiance_1.hdr", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/hosek/hosek_radiance_2.hdr", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/hosek/hosek_radiance_3.hdr", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/hosek/hosek_radiance_4.hdr", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/hosek/hosek_radiance_5.hdr", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/hosek/hosek_radiance_6.hdr", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/hosek/hosek_radiance_7.hdr", { notinlist: true });
project.addAssets("/home/liss22/armory3d/armsdk/armory/Assets/noise8.png", { notinlist: true });
project.addAssets("/home/liss22/webSample/gfx/build_clothes/compiled/Assets/Scene.arm", { notinlist: true });
project.addAssets("/home/liss22/webSample/gfx/build_clothes/compiled/Assets/meshes/action_CubeAction.arm", { notinlist: true });
project.addAssets("/home/liss22/webSample/gfx/build_clothes/compiled/Assets/meshes/mesh_Plane.001.arm", { notinlist: true });
project.addAssets("/home/liss22/webSample/gfx/build_clothes/compiled/Assets/meshes/mesh_Plane.004.arm", { notinlist: true });
project.addAssets("/home/liss22/webSample/gfx/build_clothes/compiled/Assets/meshes/mesh_Plane.005.arm", { notinlist: true });
project.addAssets("/home/liss22/webSample/gfx/build_clothes/compiled/Assets/meshes/mesh_Plane.006.arm", { notinlist: true });
project.addAssets("/home/liss22/webSample/gfx/build_clothes/compiled/Assets/meshes/mesh_Plane.007.arm", { notinlist: true });
project.addAssets("/home/liss22/webSample/gfx/build_clothes/compiled/Assets/meshes/mesh_Plane.008.arm", { notinlist: true });
project.addAssets("/home/liss22/webSample/gfx/build_clothes/compiled/Assets/meshes/mesh_Plane.009.arm", { notinlist: true });
project.addAssets("/home/liss22/webSample/gfx/build_clothes/compiled/Assets/meshes/mesh_Plane.arm", { notinlist: true });
project.addAssets("build_clothes/compiled/Assets/envmaps/World_irradiance.arm", { notinlist: true });
project.addDefine('arm_hosek');
project.addDefine('arm_deferred');
project.addDefine('arm_csm');
project.addDefine('rp_hdr');
project.addDefine('rp_renderer=Deferred');
project.addDefine('rp_shadowmap');
project.addDefine('rp_shadowmap_size=1024');
project.addDefine('rp_background=World');
project.addDefine('rp_render_to_texture');
project.addDefine('rp_compositornodes');
project.addDefine('rp_antialiasing=FXAA');
project.addDefine('rp_supersampling=1');
project.addDefine('rp_gi=Off');
project.addDefine('rp_ssgi=SSAO');
project.addDefine('arm_soundcompress');
project.addDefine('arm_fast');


resolve(project);
