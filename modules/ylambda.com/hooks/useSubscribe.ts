import axios from 'axios'
import { useMutation } from 'react-query'

const useSubscribe = () =>
  useMutation((email: string) =>
    axios.post(
      '/api/subscribers',
      {
        email: email,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    ),
  )

export default useSubscribe
