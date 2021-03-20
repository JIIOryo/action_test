import * as core from '@actions/core'
import * as exec from '@actions/exec'
import { ExecOptions } from '@actions/exec'


const main = async () => {
    try {
        const inp = core.getInput('inp')
        console.log(`This is ${inp}`);
        const outp = 'outp'
        core.setOutput("hoge", outp)
    } catch (error) {
        core.setFailed(error.message)
    }
}

main()
