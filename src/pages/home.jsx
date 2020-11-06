import Head from '@components/Head'
import styles from '@styles/Profile.module.css'
import Navigation from '@components/Navigation'

const home = () => {
    return (
        <>
            <Head title="Api Plagio -- Panel" />
            <Navigation />
            <div className="container d-flex justify-content-center">
                <div className={styles.wrapper}>
                    <div className="nav flex-column nav-pills pr-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                    </div>

                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In commodi similique voluptatibus, debitis animi odio dolores! Optio numquam odio laboriosam, ratione adipisci neque distinctio nulla labore soluta beatae enim cum.
                        </div>

                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea doloremque quaerat quos nulla repellat earum vero odio doloribus! Unde ex suscipit perspiciatis consequuntur! Alias reprehenderit temporibus repudiandae quod odio.
                        </div>

                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea doloremque quaerat quos nulla repellat earum vero odio doloribus! Unde ex suscipit perspiciatis consequuntur! Alias reprehenderit temporibus repudiandae quod odio.
                        </div>

                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea doloremque quaerat quos nulla repellat earum vero odio doloribus! Unde ex suscipit perspiciatis consequuntur! Alias reprehenderit temporibus repudiandae quod odio.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default home
