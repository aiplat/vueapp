const fs = require('fs');
const shell = require('shelljs');
// const path = require('path');

function addEnvType(envType) {
  let txt = `const a:string = '${envType}';`;
  txt += `export default a;`;
  const b = 'src/builds/envType.ts';
  fs.writeFile(b, txt.toString(), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`------Build ./${b}------`);
      console.log('');
      console.log('------Building now------');
      console.log('');
    }
  });
}


function isIn(v, k, v2) {
  if (v.indexOf(k) > -1) {
    v = `${v.split(k)[1]}`;
  } else {
    v = v2;
  }
  return v;
}

async function configArgv() {
  let argv = process.env.npm_config_argv;
  if (!argv) {
    return false;
  }
  argv = JSON.parse(argv);

  let runId = argv.original.indexOf('run');
  const buildType = argv.original[runId + 1];
  let envType = argv.original[runId + 2];
  envType = isIn(envType, 'env=', 'uat');
  let project = argv.original[runId + 3];
  project = isIn(project, 'project=', 'aiplat.com');

  const buildsDir = './src/builds';
  shell.rm('-rf', buildsDir);
  shell.mkdir('-p', buildsDir);

  const envTxt = {
    uat: 'UAT',
    ver: 'VER',
    pro: '生产',
  };
  const isDevTxt = buildType === 'build' ? '构建' : '开发';
  console.log('');
  console.log(`------${isDevTxt}${project}-${envTxt[envType]}环境------`);
  console.log('');
  await addEnvType(envType);

  const a = `./src/projects/${project}/builds/conf.ts`;
  const b = `./src/projects/${project}/builds/apis.ts`;
  const c = `./src/projects/${project}/builds/routes.ts`;
  const d = `./src/projects/${project}/builds/Business.class.ts`;
  const e = `./src/projects/${project}/builds/components.ts`;
  const f = `./src/projects/${project}/builds/store.ts`;
  shell.cp('-R', a, './src/builds/conf.ts');
  shell.cp('-R', b, './src/builds/apis.ts');
  shell.cp('-R', c, './src/builds/routes.ts');
  shell.cp('-R', d, './src/builds/Business.class.ts');
  shell.cp('-R', e, './src/builds/components.ts');
  shell.cp('-R', f, './src/builds/store.ts');
  console.log('');
  console.log(`------Build ${a}------`);
  console.log(`------Build ${b}------`);
  console.log(`------Build ${c}------`);
  console.log(`------Build ${d}------`);
  console.log(`------Build ${e}------`);
  console.log(`------Build ${f}------`);
}

configArgv();
