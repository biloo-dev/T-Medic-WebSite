<template>
    <AccountLayout>
        <div class="card">
            <div class="card-header">
                <h5>{{ $t('profile.ChangePassword') }}</h5>
            </div>
            <div class="card-divider" />
            <div class="card-body">
                <div class="row no-gutters">
                    <div class="col-12 col-lg-7 col-xl-6">
                        <div class="form-group">
                            <label for="password-current">{{ $t('profile.CurrentPassword') }}</label>
                            <input
                                id="password-current"
                                class="form-control"
                                type="password"
                                :placeholder="$t('profile.CurrentPassword')"
                            >
                        </div>
                        <div class="form-group">
                            <label for="password-new">{{ $t('profile.NewPassword') }}</label>
                            <input
                                id="password-new"
                                class="form-control"
                                type="password"
                                :placeholder="$t('profile.NewPassword')"
                            >
                        </div>
                        <div class="form-group">
                            <label for="password-confirm">{{ $t('profile.ReenterNewPassword') }}</label>
                            <input
                                id="password-confirm"
                                class="form-control"
                                type="password"
                                :placeholder="$t('profile.ReenterNewPassword')"
                            >
                        </div>

                        <div class="form-group mt-5 mb-0">
                            <button type="button" class="btn btn-primary">
                                {{ $t('profile.Change') }}
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

@Component({
    components: { AccountLayout },
    head: { title: 'Change Password' }
})
export default class Page extends Vue { }

</script>
