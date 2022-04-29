import { Component } from "react";
import './index.css'

const images = [
    {
        id:0,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152272/IMG-20220427-WA0049_mdg8mz.jpg"
       
    },
    {
        id:23,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651173173/WhatsApp_Image_2022-04-28_at_10.23.33_PM_twsgl7.jpg"
    },
  
    {
        id:1,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151704/IMG-20220427-WA0013_aewur1.jpg"
    },
    {
        id:2,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151704/IMG-20220427-WA0015_l1nqgj.jpg"
    },
    {
        id:3,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151704/IMG-20220427-WA0014_tfsldn.jpg"
    },
    {
        id:4,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151705/IMG-20220427-WA0019_othj1t.jpg"
    },
    {
        id:5,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151705/IMG-20220427-WA0016_fmcvdr.jpg"
    },
    {
        id:6,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151705/IMG-20220427-WA0017_vzjhgj.jpg"
    },
    {
        id:7,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151705/IMG-20220427-WA0021_kwnqdl.jpg"
    },
    {
        id:8,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151705/IMG-20220427-WA0018_u6xqzd.jpg"
    },
    {
        id:9,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151706/IMG-20220427-WA0024_flqnif.jpg"
    },
    {
        id:10,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151705/IMG-20220427-WA0020_ks2m5d.jpg"
    },
    {
        id:11,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151706/IMG-20220427-WA0023_ykjnad.jpg"
    },
    {
        id:12,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151706/IMG-20220427-WA0022_n9mzsm.jpg"
    },
    {
        id:13,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151706/IMG-20220427-WA0025_hsz3op.jpg"
    },
    {
        id:14,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151707/IMG-20220427-WA0027_drart6.jpg"
    },
    {
        id:15,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151706/IMG-20220427-WA0026_ixnkda.jpg"
    },
    {
        id:16,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151707/IMG-20220427-WA0029_r8yqvp.jpg"
    },
    {
        id:17,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151707/IMG-20220427-WA0031_monvav.jpg"
    },
    {
        id:18,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151707/IMG-20220427-WA0032_na5qso.jpg"
    },
    {
        id:19,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151708/IMG-20220427-WA0033_vtegbb.jpg"
    },
    {
        id:20,
        code:1,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651151704/IMG-20220427-WA0012_ng6ygt.jpg"
    },
    {
        id:21,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152272/IMG-20220427-WA0075_ef0hft.jpg"
    },
    {
        id:22,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152272/IMG-20220427-WA0050_aiuyud.jpg"
    },
   
    {
        id:27,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152610/IMG-20220427-WA0036_w5s2am.jpg"
    },
    {
        id:28,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152610/IMG-20220427-WA0035_ip4efu.jpg"
    },
    {
        id:29,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0041_rjbbbq.jpg"
    },
    {
        id:30,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0037_ms1bqk.jpg"
    },
    {
        id:31,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0038_d9tsyx.jpg"
    },
    {
        id:32,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0039_twsvg7.jpg"
    },
    {
        id:33,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0040_pcmpll.jpg"
    },
    {
        id:34,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0045_fqwo6h.jpg"
    },
    {
        id:35,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0046_ghi4i6.jpg"
    },
    {
        id:36,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0043_rkrdvk.jpg"
    },
    {
        id:37,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0042_otcdlk.jpg"
    },
    {
        id:38,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0052_cowcyp.jpg"
    },
    {
        id:39,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152611/IMG-20220427-WA0051_thuxcv.jpg"
    },
    {
        id:40,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152612/IMG-20220427-WA0053_dyopc9.jpg"
    },
    {
        id:41,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152612/IMG-20220427-WA0055_nxgcr5.jpg"
    },
    {
        id:42,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152612/IMG-20220427-WA0058_ozixlo.jpg"
    },
    {
        id:43,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152612/IMG-20220427-WA0057_tdzp6u.jpg"
    },
    {
        id:44,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152613/IMG-20220427-WA0065_up7m33.jpg"
    },
    {
        id:45,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152613/IMG-20220427-WA0062_drjjx5.jpg"
    },
    {
        id:46,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152613/IMG-20220427-WA0063_toatfs.jpg"
    },
    {
        id:47,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152613/IMG-20220427-WA0066_aovju6.jpg"
    },
    {
        id:48,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152613/IMG-20220427-WA0067_fvxng9.jpg"
    },
    {
        id:49,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152613/IMG-20220427-WA0064_ii0edj.jpg"
    },
    {
        id:50,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152613/IMG-20220427-WA0072_quodgq.jpg"
    },
    {
        id:51,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152613/IMG-20220427-WA0073_ifw8qn.jpg"
    },
    {
        id:52,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152613/IMG-20220427-WA0071_uoqfdt.jpg"
    },
    {
        id:53,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152614/IMG-20220427-WA0082_rkuetf.jpg"
    },
    {
        id:54,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152614/IMG-20220427-WA0088_ycv0ih.jpg"
    },
    {
        id:55,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152614/IMG-20220427-WA0087_aryzuf.jpg"
    },
    {
        id:56,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152615/IMG-20220427-WA0093_y884gl.jpg"
    },
    {
        id:57,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152614/IMG-20220427-WA0090_ijetrx.jpg"
    },
    {
        id:58,
        code:2,
        url:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152615/IMG-20220427-WA0095_rvgopq.jpg"
    },
]

const videos = [
    {
        id:59,
        code:3,
        url:"https://res.cloudinary.com/chaitu1002/video/upload/v1651154806/VID-20220427-WA0078_ofyhip.mp4",
        poster:"https://res.cloudinary.com/chaitu1002/image/upload/v1651152613/IMG-20220427-WA0072_quodgq.jpg"
    },
    {
        id:60,
        code:3,
        url:"https://res.cloudinary.com/chaitu1002/video/upload/v1651154806/VID-20220427-WA0070_u8jm9o.mp4"
    },
    {
        id:61,
        code:3,
        url:"https://res.cloudinary.com/chaitu1002/video/upload/v1651154807/VID-20220427-WA0080_murd3g.mp4"
    },
]



const differentButtons = [
    {
        id:0,
        type:"All"
    },
    {
        id:1,
        type:"Art"
    },
    {
        id:2,
        type:"Sarees"
    },
    {
        id:3,
        type:"Videos"
    },

]

class Work extends Component{
    state={activeButton:differentButtons[0].id,imagesList:images}

    workButtonClicked = (event) => {
        let clickedValue = event.target.value
        let finalList=[];
        if(parseInt(clickedValue)===0){
            finalList=[...images]
        }else if(parseInt(clickedValue)===3){
            finalList=[...videos]
        }else{
            const list = images.filter(eachItem => eachItem.code === parseInt(clickedValue))
            finalList = [...list]
        }
        this.setState({activeButton:event.target.value,imagesList:finalList})
    }

    imagesFun = () => {
        const {imagesList} = this.state 
        return(
            imagesList.map(eachItem => (
                <img className="allimages" key={eachItem.id} src={eachItem.url} alt={eachItem.code}/>
            ))
            
        )
    }

    videoFun = () => {
        const {imagesList} = this.state 
        return(
            imagesList.map(eachItem => (
                <video className="video" key={eachItem.id} poster={eachItem.poster} width="400" height="400" controls>
                    <source className="source" src={eachItem.url} type="video/mp4"/>
                </video>
            ))
        )
    }

 

    render(){
        const {activeButton} = this.state
      
        return(
            <div className="work-container">
                  <h1 className='aboutme1'>MY <span className='span-me'>Work</span></h1>
                  <div className="buttons-container">
                  {differentButtons.map(eachItem => (
                      <button onClick={this.workButtonClicked} className={parseInt(activeButton)===eachItem.id?"work-buttons-true":"work-buttons"} type="button" key={eachItem.id} value={eachItem.id}>{eachItem.type}</button>
                  ))}
                  </div>
                  <div className="images-container">
                      {parseInt(activeButton)===3?this.videoFun():this.imagesFun()}
                  </div>

            </div>
        )
    }
}

export default Work