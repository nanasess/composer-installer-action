import * as core from '@actions/core';
import {installComposer} from './installer';

async function run() {
  try {
    console.log(`##Installing Composer}`);
    await installComposer();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
