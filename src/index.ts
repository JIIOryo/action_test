import * as core from '@actions/core'
import * as exec from '@actions/exec'
import { ExecOptions } from '@actions/exec'

// const execute = async (command: string): Promise<string> => {
//     let output = ''
//     const options: ExecOptions = {}
//     options.listeners = {
//         stdout: (data: Buffer) => {
//             output += data.toString()
//         },
//         stderr: (data: Buffer) => {
//             console.error(data)
//         }
//     }
//     await exec.exec(command, null, options)
//     return output
// }

const main = async () => {
    try {
        const inp = core.getInput('inp')
        // const preTag = await execute('/bin/bash -c "git tag --sort=-creatordate | sed -n 2p"')
        // const summary = await execute(`git log --oneline --pretty=tformat:"%h %s" ${preTag.trim()}..${newTag}`)
        console.log(`This is ${inp}`);
        const outp = 'outp'
        core.setOutput("hoge", outp)
    } catch (error) {
        core.setFailed(error.message)
    }
}

main()
