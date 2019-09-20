import program from 'commander'
import child from 'child_process'


program
  .version('0.0.1', '-v, --version', '获取版本号')

program
  .command('start')
  .description('本地运行')
  .alias('s')
  .action(() => {
    child.exec('npx webpack', function(err, sto) {
      if (err) {
        console.log(err)
      } else {
        console.log(sto, 'npx webpack -v')
      }
    })
    console.log('sssssssss')
    console.log(process.cwd())
  })

program
  .command('build')
  .description('打包')
  .alias('b')
  .action((templateName, projectName) => {
    console.log('bbbbbbbbbbbbbbb')
  })

program.parse(process.argv)