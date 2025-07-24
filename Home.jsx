import Styles from './Home.module.css'
import imgCircle from './src/images/pattern-circle.svg'
import imgLines from './src/images/pattern-lines.svg'
import imgMarkBottom from './src/images/pattern-squiggly-line-bottom-desktop.svg'
import lineTop from './src/images/pattern-squiggly-line-top.svg'
import logo from './src/images/logo-full.svg'
import iconUpload from './src/images/icon-upload.svg'





function Home() {

    return (
        < >
            <main className={Styles.container}>
                <div className={Styles.fundo}>
                    <img className={Styles.circle} src={imgCircle} alt="" />

                    <img className={Styles.Lines} src={imgLines} alt="" />
                    <img className={Styles.Lines2} src={imgLines} alt="" />
                    <img className={Styles.markBottom} src={imgMarkBottom} alt="" />

                    <img className={Styles.circleiInf} src={imgCircle} alt="" />

                    <img className={Styles.lineTop} src={lineTop} alt="" />
                </div>

                <section className={Styles.formulario}>

                    <img className={Styles.imagemLogoFull} src={logo} alt="" />

                    <h1>Your Journey to Coding Conf <br /> 2025 Starts Here !</h1>
                    <h2>Secure your spot at next year´s biggest coding conference </h2>

                    <div className={Styles.upload_container}>
                        <p className={Styles.aiai}>Upload Avatar</p>
                        <div className={Styles.divzao}>
                            <div className={Styles.upload_box}></div>
                            <div className={Styles.upload_arquivo}>
                                <label className={Styles.upload_img} for="avatar"><img src={iconUpload} alt="" /></label>
                                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />

                                <p>Drag and drop or click to upload</p>
                            </div>

                        </div>
                        <p className={Styles.info_img}>! Upload Your Photo ( JPG or PNG, mas size: 500kb) </p>


                        <form action="" className={Styles.form_container}>

                            <label className={Styles.labels} htmlFor="">Full Name</label>
                            <input className={Styles.inps} type="text" />

                            <label className={Styles.labels} htmlFor="">Email Address</label>
                            <input className={Styles.inps} type="email" placeholder='exemplo@gmail.com' />

                            <label className={Styles.labels} htmlFor="">GitHub Username</label>
                            <input className={Styles.inps} type="text" placeholder='@GitName' />

                            <button >Generate My Ticket</button>
                        </form>



                    </div>

                </section>

            </main>
        </>


    )


}


export default Home