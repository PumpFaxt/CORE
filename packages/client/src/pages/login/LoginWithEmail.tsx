import { Form } from "../../shared/components/radix.ts";

export default function LoginWithEmail() {
    return (
        <Form.Root>
            <Form.Field name="email">
                <div>
                    <Form.Label>
                        Email Login
                    </Form.Label>

                    <Form.Message className="destructive" match="valueMissing">
                        Please enter your email
                    </Form.Message>

                    <Form.Message className="FormMessage" match="typeMismatch">
                        Please provide a valid email
                    </Form.Message>
                </div>

                <Form.Control asChild>
                    <input
                        type="email"
                        className={"mt-2"}
                        placeholder="Full Email Address"
                        required
                    />
                </Form.Control>
            </Form.Field>

            <Form.Submit asChild>
                <button className={"btn primary w-full mt-4"}>
                    Next
                </button>
            </Form.Submit>
        </Form.Root>
    );
}
