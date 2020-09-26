import React, { useEffect, useState, FunctionComponent as FC } from 'react';
import SearchService from '../../services/SearchService'
import Loading from '../../components/Loading/Loading'
import { profileInterface, reposInterface } from '../../interfaces'
import './Profile.scss'

const searchService: SearchService = new SearchService();

const Profile: FC = (props: any) => {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(({} as profileInterface));
  const [repos, setRepos] = useState(([] as Array<reposInterface>));

  useEffect(() => {
    (async () => {
      setLoading(true)

      let data = await searchService.loadProfile(props.match.params.name)

      if (data.message === "Not Found") {
        props.history.push('/limbo')
      } else {
        let repositories = await searchService.loadRepositories(data.login)

        if (data.location) {
          data.location = data.location.split(' ').join('+')
        }

        setLoading(false)
        setRepos(repositories)
        setProfile(data)
      }
    })()
  }, [props])

  function openLink(url: string) {
    window.open(url)
  }

  return (
    <div className="section">
      {!loading ? (
        <div className="profile">
          <div className="img-aligner">
            <img src={profile.avatar_url} alt="Profile avatar" className="profile-image" />
            <span className="material-icons open-link" onClick={() => openLink(profile.html_url)}>
              open_in_new
            </span>
          </div>
          <h2 className="section-title">{profile.name ? profile.name : profile.login}</h2>
          <h2 className="section-description">{profile.bio ? profile.bio : 'Este perfil não possui uma biografia!'}</h2>
          <iframe
            src={profile.location ? `https://www.google.com/maps/embed/v1/place?key=<API_KEY>&q=${profile.location}` : `https://www.google.com/maps/embed/v1/place?key=AIzaSyAw0F7TrsEvwq3DbfDwHbQoAPefdnacOfE&q=greenland`}
            title="Profile Map"
            height="450px"
            width="100%"
            id="myId"
            className="profile-map"
            frameBorder="0"
          ></iframe>
          <div className="repos-container">
            <h3 className="repos-title">
              Repositórios Favoritados
            </h3>
            {repos.map(repo => (
              <div className="repos" key={repo.url}>
                <div className="repos-title">
                  <span className="repos-name">
                    {repo.name}
                  </span>
                  <span className="repos-star">
                    {repo.stargazers_count}
                    <span className="material-icons repos-icon">grade</span>
                  </span>
                </div>
                <p className="repos-description">{repo.description}</p>
              </div>
            ))}
            {repos.length === 0 && (
              <p className="repos-description">Este usuário não possui nenhum repositório favoritado!</p>
            )}
          </div>
        </div>
      ) : (
          <Loading />
        )}
    </div>
  )
}

export default Profile