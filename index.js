const cli = require('cac')("lz-oss")

cli.option('--type [type]', 'Choose a project type', {
	  default: 'node',
})
cli.option('--name <name>', 'Provide your name')

cli.command('lint [...files]', 'Lint files').action((files, options) => {
	  console.log(files, options)
})
cli
  .command('rm <dir>', 'Remove a dir')
  .option('-r, --recursive', 'Remove recursively')
  .action((dir, options) => {
	      console.log('remove ' + dir + (options.recursive ? ' recursively' : ''))
  })

// Display help message when `-h` or `--help` appears
cli.help()

// Display version number when `-v` or `--version` appears
// It's also used in help message

cli.version('1.0.0-alpha-2')
cli.parse()
