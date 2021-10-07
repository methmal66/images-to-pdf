import { get_base_dir } from '../src/utils'

test('display current directory', () => {
   expect(get_base_dir()).toEqual('images-to-pdf')
})
