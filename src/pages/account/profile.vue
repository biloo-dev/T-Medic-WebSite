<template>
    <AccountLayout>
        <div class="card">
            <div class="card-header">
                <h5>{{ $t('profile.EditProfile') }}</h5>
            </div>
            <div class="card-divider" />
            <div class="card-body">
                <div class="row no-gutters">
                    <div class="col-12 col-lg-7 col-xl-6">
                        <div class="form-group">
                            <label for="profile-first-name">{{ $t('profile.FirstName') }}</label>
                            <input
                                v-model="form.firstName" 
                                type="text"
                                class="form-control"
                                :placeholder="$t('profile.FirstName')"
                            >
                        </div>
                        <div class="form-group">
                            <label for="profile-last-name">{{ $t('profile.LastName') }}</label>
                            <input
                                v-model="form.lastName" 
                                type="text"
                                class="form-control"
                                :placeholder="$t('profile.LastName')"
                            >
                        </div>
                        <div class="form-group">
                            <label for="profile-email">{{ $t('profile.EmailAddress') }}</label>
                            <input
                                v-model="form.email" 
                                type="email"
                                class="form-control"
                                :placeholder="$t('profile.EmailAddress')"
                            >
                        </div>
                        <div class="form-group">
                            <label for="profile-phone">{{ $t('profile.PhoneNumber') }} (1)</label>
                            <input
                                v-model="form.phone1" 
                                type="text"
                                class="form-control"
                                :placeholder="$t('profile.PhoneNumber') + ' (1)'"
                            >
                        </div>
                        <div class="form-group">
                            <label for="profile-phone">{{ $t('profile.PhoneNumber') }} (2)</label>
                            <input
                                v-model="form.phone2" 
                                type="text"
                                class="form-control"
                                :placeholder="$t('profile.PhoneNumber') + ' (2)'"
                            >
                        </div>

                        <div class="form-group mt-5 mb-0">
                            <button type="button" class="btn btn-primary">
                               {{ $t('profile.saveProfile') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AccountLayout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import AccountLayout from '~/components/account/account-layout.vue'
import { IUser, IData } from '~/interfaces/User' 
import { Getter } from 'vuex-class' 
@Component({
    components: { AccountLayout },
    head: { title: 'Profile' }
})
export default class Page extends Vue { 
    @Getter('auth/isLoading') isLoading! : boolean
    @Getter('auth/isLogin') isLogin! : boolean
    @Getter('auth/getUser') User! : IUser
    form  : IUser = {
        id:0,
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        sexe: 1,
        type: 1,
        phone1: "",
        phone2: "",
        img : "",
    }
    mounted(){
        this.form = this.User
    }
}

</script>
