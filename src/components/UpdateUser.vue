<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" id="trigger-btn" class="btn" data-bs-toggle="modal" data-bs-target="#updateUserModal">
        </button>

        <!-- Modal -->
        <div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="updateUserModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title mx-auto me-3" id="exampleModalLabel">New User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="mb-1 w-75 mx-auto row gap-2">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="name" placeholder="Name">
                            </div>
                        </div>

                        <div class="mb-1 w-75 mx-auto row gap-2">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="" placeholder="Surname">
                            </div>
                        </div>
                        <div class="mb-1 w-75 mx-auto row gap-2">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="" placeholder="Gender">
                            </div>
                        </div>

                        <div class="mb-1 w-75 mx-auto row gap-2">
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="name" placeholder="Contact">
                            </div>
                        </div>

                        <div class="mb-1 w-75 mx-auto row gap-2">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="" placeholder="Email">
                            </div>
                        </div>

                        <div class="mb-1 w-75 mx-auto row gap-2">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="" placeholder="Password">
                            </div>
                        </div>
                        <div class="mb-1 w-75 mx-auto row gap-2">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="" placeholder="Role">
                            </div>
                        </div>
                        <div class="mb-1 w-75 mx-auto row gap-2">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="" placeholder="Profile URL">
                            </div>
                        </div>

                        <div class="mb-1 w-75 mx-auto row gap-2">
                            <div class="col-sm-10">
                                <input type="date" class="form-control" id="" placeholder="Join Date">
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" id="update-btn" class="btn mx-auto">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            userPass: '',
            gender: '',
            userRole: '',
            userImage: '',
            joinDate: '',
        }
    },
    computed: {
        user() {
            return this.$store.dispatch("register", {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber,
                email: this.email,
                userPass: this.userPass,
                gender: this.gender,
                userRole: this.userRole,
                joinDate: this.joinDate
            })
        }
    }
}
</script>

<style scoped>
#trigger-btn {
    background-color: #EB455F !important;
}

.container-fluid {
    width: 80%;
    margin: auto;
    height: fit-content
}

#update-btn {
    width: 40px;
    font-size: 9px;
}

.btn {
    display: inline-block;
    background: #2B3467;
    width: 40px !important;
    margin-bottom: 20px;
    color: #fff;
    padding: 0.7rem 1.3rem;
    border-radius: 0.5rem;
    margin-right: 1rem;
    box-shadow: 4px 4px 25px rgba(51, 51, 51, 0.192);
    transition: background 0.5s ease-out;
}

.btn:hover {
    box-shadow: 6px 6px 0px #969696,
        -3px -3px 10px #ffffff;
    transform: translateX(-0.5em) translateY(-0.5em);
}

.btn:active {
    transition: .2s;
    transform: translateX(0em) translateY(0em);
    box-shadow: none;
}
</style>