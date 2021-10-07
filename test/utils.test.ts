import { get_file_from } from '../src/utils'
import path from 'path'

test('get absolute name, width and height of a file', () => {
   const get_file = get_file_from(path.join(process.cwd(), 'test', 'images'))
   expect(get_file('1.png')).toMatchObject({ width: 1097, height: 663 })
   expect(get_file('2.png')).toMatchObject({ width: 1097, height: 630 })
   expect(get_file('3.png')).toMatchObject({ width: 1097, height: 799 })
})
