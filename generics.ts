function identity2(arg: string[]) : string {
    return arg.join('')
}

const output1 = identity2(['enes','dumanli'])
console.log(output1)



interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): string {
  typeof arg !== 'string' 
    ? 
  return 'not equal string type' 
    : 
  return arg
}
 
let myIdentity: GenericIdentityFn<string> = identity;

console.log(myIdentity('deneme'))

interface SomeConstraints {
  length: number;
  join(arg ?: string): string;
  concat(arg:object):Array<string>
}
 
function loggingIdentity<Type extends SomeConstraints>(arg: Type): Type {
  let newArray = ['fe','developer']
  console.log(arg.length); // Now we know it has a .length property, so no more error
  console.log(arg.join())
  console.log(arg.concat(newArray).join(' '))
  return arg;
}

loggingIdentity(['enes','dumanli'])
