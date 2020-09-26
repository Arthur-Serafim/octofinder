export default class SearchService {
  async loadProfile(username: string) {
    let response = await fetch(`https://api.github.com/users/${username}`)
    let data = await response.json()

    return data
  }

  async loadRepositories(username: string) {
    let response = await fetch(`https://api.github.com/users/${username}/starred`)
    let data = await response.json()

    return data
  }

  async loadAllProfiles(username: string) {
    let response = await fetch(`https://api.github.com/search/users?q=${username}`)
    let data = await response.json()

    if (data.items.length > 0) {
      return data.items
    } else {
      return [{ message: 'Not Found' }]
    }

  }
}