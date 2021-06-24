import { gql } from '@apollo/client'

export const LOAD_DATA = gql`
query{
  continents{
    name
    code
    countries{
      name
      code
      languages{
        name
		  code
      }
    }
  }
}
`