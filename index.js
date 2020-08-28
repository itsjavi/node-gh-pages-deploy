#!/usr/bin/env node
'use strict';

const { exec } = require("child_process");
const path = require("path");

const projectDir = path.resolve(__dirname, '/../../');
const pkg = require(projectDir + 'package.json')
const tmpDir = projectDir + '/tmp';
const codeDir = path.resolve(projectDir, pkg.ghPagesDeploy.directory);

const runCmd = (cmd) => {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      //return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      //return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

const shellScript = ` rm -rf ${codeDir}/.git ${tmpDir} && \\
  mkdir -p ${tmpDir} && \\
  cp -R ${codeDir} ${tmpDir}/build && \\
  git clone -b gh-pages ${pkg.ghPagesDeploy.repository} ${tmpDir}/gh-pages && \\
  mv ${tmpDir}/gh-pages/.git ${codeDir}/.git && \\
  cd ${codeDir} && \\
  git add -A && \\
  git commit -m "${pkg.ghPagesDeploy.commitMessage}" && \\
  rm -rf ${tmpDir} && \
  cd ${codeDir} && \
  git push
`

runCmd(shellScript);
