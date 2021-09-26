import { get_base_dir } from '../src/questions'

test('display current directory', () => {
   expect(get_base_dir()).toEqual('images-to-pdf')
})
