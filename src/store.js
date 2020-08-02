
function Store() {
    this.counter = 0;
    this.add = () => {};

    this.addNotification = notification => {
        this.counter += 1;
        return this.add(notification);
    };

    this.removeNotification = () => {};
    this.register = ({ addNotification, removeNotification }) => {
        this.add = addNotification;
        this.removeNotification = removeNotification;
    };

    return this;
}

export default new Store();