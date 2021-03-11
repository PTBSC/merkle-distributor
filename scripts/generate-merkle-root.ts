import { program } from 'commander'
import fs from 'fs'
import { parseBalanceMap } from '../src/parse-balance-map'
import path from 'path'

program
  .version('0.0.0')
  .requiredOption(
    '-i, --input <path>',
    'input JSON file location containing a map of account addresses to string balances')
  .option('-s, --split <path>',
    'split proofs per address in output directory'
  )

program.parse(process.argv)

const json = JSON.parse(fs.readFileSync(program.input, { encoding: 'utf8' }))

if (typeof json !== 'object') throw new Error('Invalid JSON')

if (program.split != undefined)
  fs.mkdir(program.split, { recursive: true }, (err) => {
  if (!err)
    console.log('Directory created successfully!')
})

const proofs = parseBalanceMap(json)

if (program.split != undefined) {
  for (let address of Object.keys(proofs.claims)) {
    let claim: { [addr: string]: any } = {}
    claim[address] = proofs.claims[address]
    let output = {
      merkleRoot: proofs.merkleRoot,
      tokenTotal: proofs.tokenTotal,
      claims: claim
    }
    fs.writeFileSync(path.join(program.split, address + '.json'), JSON.stringify(output, null, 2))
  }
} else {
  console.log(JSON.stringify(proofs, null, 2))
}
