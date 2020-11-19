import module2 from '@youngjuning/module-2'

function module1() {
  console.log('[module-1]')
  return module2()
}
export default module1
