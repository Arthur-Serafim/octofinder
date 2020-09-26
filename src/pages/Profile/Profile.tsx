import React, { useEffect, useRef, FunctionComponent as FC } from 'react';
import SearchService from '../../services/SearchService'

const searchService: SearchService = new SearchService();

const Profile: FC = (props: any) => {
  let profile = useRef({});

  useEffect(() => {
    (async () => {
      let data = await searchService.loadProfile(props.match.params.name)

      if (data.message === "Not Found") props.history.push('/limbo')

      profile.current = data
    })()
  }, [props])

  return (
    <div className="section"></div>
  )
}

export default Profile