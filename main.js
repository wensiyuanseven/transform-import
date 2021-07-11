const transRegex = /(const|let|var)\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*import\s*\(['"](@[/-\w]+\.vue)['"]\)/g
export default function myPlugin(fileName) {
    return {
        name: 'transform-router-file',
        apply: 'build',
        transform(code, id) {
            const routerRegex = new RegExp(fileName, 'g')  // /router\/index\.js$/
            if (routerRegex.test(id)) {
                return code.replace(transRegex, ($0, $1, $2, $3) => `import ${$2} from '${$3}'`)
            }
        },
    }
}
