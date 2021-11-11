import { get_base_dir, get_files_in_order } from '../src/utils'

test('display current directory', () => {
   expect(get_base_dir()).toEqual('images-to-pdf')
})

test('find file names in correct order', () => {
   expect(get_files_in_order('/home/methmal/Programs/node/images-to-pdf/test/images')).toEqual(['1.png', '2.png', '3.png', 'output.pdf'])
})
