import React, { useEffect, useState, FunctionComponent as FC } from 'react';
import SearchService from '../../services/SearchService'
import Loading from '../../components/Loading/Loading'
import { profileInterface } from '../../interfaces'
import './SearchAll.scss'

const searchService: SearchService = new SearchService();

const SearchAll: FC = (props: any) => {
  const [loading, setLoading] = useState(true)
  const [profiles, setProfiles] = useState(([] as Array<profileInterface>));

  useEffect(() => {
    (async () => {
      setLoading(true)

      let data = await searchService.loadAllProfiles(props.match.params.name)
      if (data[0].message === "Not Found") props.history.push('/limbo')

      setLoading(false)
      setProfiles(data)
    })()
  }, [props])

  function openLink(url: string) {
    props.history.push(`/perfil/${url}`)
  }

  return (
    <div className="section">
      {!loading ? (
        <div className="profiles-container">
          {profiles.map(profile => (
            <div className="profiles-item" onClick={() => openLink(profile.login)} key={profile.login}>
              <img src={profile.avatar_url} alt="Profile Avatar" className="profiles-item-image" />
              <span className="profiles-item-name">{profile.login}</span>
            </div>
          ))}
        </div>
      ) : (
          <Loading />
        )}
    </div>
  )
}

export default SearchAll