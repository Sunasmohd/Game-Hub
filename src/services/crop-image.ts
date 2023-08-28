import icon from '../assets/icon4.jpg'
const cropImage = (url:string) =>{
    if (!url) return icon
    const target = 'media/'
    const index = url.indexOf(target) + target.length
    const sliced = url.slice(0,index) + 'crop/600/400/' + url.slice(index)
    return sliced
}

export default cropImage