import React, { useEffect, useState, FunctionComponent as FC } from 'react';
import SearchService from '../../services/SearchService'

import './Profile.scss'

const searchService: SearchService = new SearchService();
interface avatar {
  avatar_url: string,
  name: string,
  bio: string,
  location: string
}

const Profile: FC = (props: any) => {
  const [loading, setLoading] = useState(true)
  let [profile, setProfile] = useState(({} as avatar));

  useEffect(() => {
    (async () => {
      let data = await searchService.loadProfile(props.match.params.name)
      if (data.message === "Not Found") props.history.push('/limbo')

      setLoading(false)
      setProfile(data)

      console.log(data)
    })()
  }, [props])

  return (
    <div className="section">
      {!loading && (
        <div className="profile">
          <img src={profile.avatar_url} alt="Profile avatar" className="profile-image" />
          <h2 className="section-title">{profile.name}</h2>
          <h2 className="section-description">{profile.bio}</h2>
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=<API_KEY>&q=${profile.location}`}
            title="Profile Map"
            height="450px"
            width="100%"
            id="myId"
            className="profile-map"
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default Profile