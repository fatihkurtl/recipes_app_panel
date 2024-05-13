<script setup lang="ts">
import UsersTable from '@/components/local/users/UsersTable.vue';
import UsersInfoCard from '@/components/local/users/UsersInfoCard.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import LatestUsersCard from '@/components/local/users/LatestUsersCard.vue';


</script>

<template>
    <AdminLayout>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 min-w-full">
            <div class="col-span-full md:col-span-2 lg:col-span-2 xl:col-span-3">
                <UsersTable />
            </div>

            <div class="col-span-full md:col-span-2 lg:col-span-1 xl:col-span-1 p-3 sm:p-5">
                <UsersInfoCard />

                <!-- users card -->
                <LatestUsersCard />
                <!-- users card -->
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped></style>